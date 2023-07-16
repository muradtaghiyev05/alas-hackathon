from sklearn.preprocessing import MinMaxScaler, StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score
from sklearn.pipeline import Pipeline
import pickle
import pandas as pd
import joblib
from sklearn.model_selection import GridSearchCV, RepeatedStratifiedKFold

df = pd.read_csv("credit_card_churn_data.csv")
df.drop(['a', 'w', 'v', 'd', 'g'], axis=1, inplace=True)

LE = LabelEncoder()
for cat in ['b', 'f', 'h', 'i']:
    df[cat] = LE.fit_transform(df[cat].astype(str))

x = df.drop('b', axis=1).astype(float).values
y = df['b'].astype(float).values

preprocessing_pipeline = Pipeline(
    [
        ('scaler', StandardScaler()), 
        ('normalizer', MinMaxScaler()) 
    ]
)

pipeline = Pipeline(
    [
        ('preprocessing', preprocessing_pipeline),
        ('grd', GradientBoostingClassifier())  
    ]
)

params = {
    'grd__learning_rate': [0.1, 0.01],
    'grd__n_estimators': [100, 200, 300],
    'grd__max_depth': [3, 5, 7],
    'grd__subsample': [0.8, 1.0],
    'grd__random_state': [42]
}

rskf = RepeatedStratifiedKFold(n_splits=5, n_repeats=2, random_state=42)

cv = GridSearchCV(pipeline, params, cv=rskf, scoring=['f1', 'accuracy'], refit='f1', n_jobs=-1)

X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=42)

cv.fit(X_train, y_train)

y_pred = cv.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.3f}')

pipeline_and_model = {'pipeline': pipeline, 'model': cv}
pickle.dump(pipeline_and_model, open('credit_pipeline_and_model.pkl', 'wb'))

