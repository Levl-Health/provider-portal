import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PatientForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.patient?.id)
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
          name="providerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Provider id
        </Label>

        <NumberField
          name="providerId"
          defaultValue={props.patient?.providerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="providerId" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <NumberField
          name="active"
          defaultValue={props.patient?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="active" className="rw-field-error" />

        <Label
          name="overdue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Overdue
        </Label>

        <NumberField
          name="overdue"
          defaultValue={props.patient?.overdue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="overdue" className="rw-field-error" />

        <Label
          name="riskStatus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Risk status
        </Label>

        <NumberField
          name="riskStatus"
          defaultValue={props.patient?.riskStatus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="riskStatus" className="rw-field-error" />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.patient?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="middleName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Middle name
        </Label>

        <TextField
          name="middleName"
          defaultValue={props.patient?.middleName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="middleName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.patient?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <TextField
          name="avatar"
          defaultValue={props.patient?.avatar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avatar" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.patient?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PatientForm
