import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const DailyMetricForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.dailyMetric?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="patientId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Patient id
        </Label>

        <NumberField
          name="patientId"
          defaultValue={props.dailyMetric?.patientId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="patientId" className="rw-field-error" />

        <Label
          name="adhd"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adhd
        </Label>

        <NumberField
          name="adhd"
          defaultValue={props.dailyMetric?.adhd}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="adhd" className="rw-field-error" />

        <Label
          name="anxiety"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Anxiety
        </Label>

        <NumberField
          name="anxiety"
          defaultValue={props.dailyMetric?.anxiety}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="anxiety" className="rw-field-error" />

        <Label
          name="depression"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Depression
        </Label>

        <NumberField
          name="depression"
          defaultValue={props.dailyMetric?.depression}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="depression" className="rw-field-error" />

        <Label
          name="mood"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mood
        </Label>

        <TextField
          name="mood"
          defaultValue={props.dailyMetric?.mood}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mood" className="rw-field-error" />

        <Label
          name="dosages"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dosages
        </Label>

        <NumberField
          name="dosages"
          defaultValue={props.dailyMetric?.dosages}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dosages" className="rw-field-error" />

        <Label
          name="dosagesTaken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dosages taken
        </Label>

        <NumberField
          name="dosagesTaken"
          defaultValue={props.dailyMetric?.dosagesTaken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dosagesTaken" className="rw-field-error" />

        <Label
          name="checkedIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checked in
        </Label>

        <NumberField
          name="checkedIn"
          defaultValue={props.dailyMetric?.checkedIn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checkedIn" className="rw-field-error" />

        <Label
          name="moodLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mood level
        </Label>

        <NumberField
          name="moodLevel"
          defaultValue={props.dailyMetric?.moodLevel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="moodLevel" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DailyMetricForm
