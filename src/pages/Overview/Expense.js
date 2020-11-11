import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as Service from '../../services/Service';
import TextArea from '../../components/controls/TextArea';

const initialValues = {
  type: 'Расход',
  id: 0,
  balance: '',
  categoryId: '',
  money: 0,
  date: new Date(),
  contractorId: '',
  projectId: '',
  comments: '',
};

export default function Expense(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length != 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialValues,
    true,
    validate,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Select
            name="balance"
            label="Со счета"
            value={values.balance}
            onChange={handleInputChange}
            options={Service.getBalanceCollection()}
          />
          <Controls.Select
            name="categoryId"
            label="Категория"
            value={values.categoryId}
            onChange={handleInputChange}
            options={Service.getCategoryCollection()}
          />
          <Controls.Select
            name="contractorId"
            label="Контрагент"
            value={values.contractorId}
            onChange={handleInputChange}
            options={Service.getContractorCollection()}
          />
          <Controls.Select
            name="projectId"
            label="Проект"
            value={values.projectId}
            onChange={handleInputChange}
            options={Service.getProjectCollection()}
          />
        </Grid>
        <Grid xs={6} align="center">
          <Controls.Input
            name="money"
            label="Сумма средств"
            value={values.money}
            onChange={handleInputChange}
            type="number"
          />
          <Controls.DatePicker
            name="date"
            label="Дата"
            value={values.date}
            onChange={handleInputChange}
          />
          <Controls.TextArea
            name="comments"
            label="Комментарий"
            value={values.comments}
            onChange={handleInputChange}
            type="text"
          />
          <button className="form__submit expense" onSubmit={handleSubmit}>
            Отправить
          </button>
        </Grid>
      </Grid>
    </Form>
  );
}
