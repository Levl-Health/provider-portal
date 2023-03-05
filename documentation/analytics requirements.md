## Levl Provider Portal

### Logical Requirements for Analytics

### Provider Dashboard

#### Active Patients
Displayed in a card in the upper right part of the page. Active patients is a simple count of the number of Levl subscribers that are being treated by the provider.

Query (psuedo code)
SELECT count(*)
FROM patient
WHERE providerId = [the doctor's id]
  AND active = true

#### Overdue Patients
Displayed in a card in the upper right part of the page. Overdue patients is a count of the number of patients who are late taking the medication.

Query (psuedo code)
SELECT count(*)
FROM patient
WHERE providerId = [the doctor's id]
  AND active = true
  AND overdue = true

#### High-risk Patients
Displayed in a card in the uppright part of the page. High-risk patient is a count of the number of patient who are considered are high risk.

Query (psuedo code)
SELECT count(*)
FROM patient
WHERE providerId = [the doctor's id]
  AND active = true
  AND riskStatus = [n]

The presumption is that riskStatus are sequential integers from 0 to n with 0 being the lowest status and n being the highest status.

#### Risk-status
Displayed in the table of patients. Each patient will have an image that cooresponds to the value of their riskStatus.

Query (psuedo code)
SELECT riskStatus, [other fields]
FROM patient
WHERE providerId = [the doctor's id]
  AND active = true

The presumption is that riskStatus are sequential integers from 0 to n with 0 being the lowest status and n being the highest status.

#### Symptoms
Displayed as one or two images in the table of patients. The patient will have one image if there is only a value for one item. There will be two images if there is a value for two or three symptoms. If all three symptoms have values, then the top two are displayed.

The values are computed by taking an average of each symptom from the last 30 days of the DailyMetrics table.

Query (psuedo code)
SELECT AVG(adhd) AS adhd, AVG(anxiety) AS anxiety, AVG(depression) AS depression
FROM DailyMetrics
WHERE providerId = [the doctor's id]
  AND active = true
  AND (BETWEEN today - 30 AND today)
GROUP BY id

#### Mood Reported
TBD

#### Adherence

### HCP Dashboard
