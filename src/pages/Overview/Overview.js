import React, { useState } from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as Service from '../../services/Service';
import Income from './Income';
import Expense from './Expense';
import Transfer from './Transfer';
import './Overview.scss';

import Controls from '../../components/controls/Controls';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Popup from '../../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const headCells = [
  { id: 'date', label: 'Дата', disableSorting: true },
  { id: 'type', label: 'Тип', disableSorting: true },
  { id: 'money', label: 'Сумма', disableSorting: true },
  { id: 'balanceId', label: 'Счет', disableSorting: true },
  { id: 'categoryId', label: 'Категория', disableSorting: true },
  { id: 'contractorId', label: 'Контрагент', disableSorting: true },
  { id: 'projectId', label: 'Проект', disableSorting: true },
];

export default function Overview() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(Service.getAllTransactions());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const [openIncome, setOpenIncome] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(
    records,
    headCells,
    filterFn,
  );

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else return items.filter((x) => x.fullName.toLowerCase().includes(target.value));
      },
    });
  };

  const addOrEdit = (transaction, resetForm) => {
    if (transaction.id == 0) Service.insertTransaction(transaction);
    else Service.updateTransaction(transaction);
    resetForm();
    setRecordForEdit(null);
    setOpenExpense(false);
    setOpenTransfer(false);
    setOpenIncome(false);
    setRecords(Service.getAllTransactions());
  };
  const getCollection = (itemId, collection) => {
    if (collection[itemId - 1] != undefined && collection[itemId - 1] != '') {
      return collection[itemId - 1].title;
    } else {
      return '-';
    }
  };

  return (
    <>
      <Toolbar className="buttonRow">
        <Controls.Button
          text="Доход"
          variant="outlined"
          startIcon={<AddIcon />}
          className="buttonRow__btn btn-income"
          onClick={() => {
            setOpenIncome(true);
            setRecordForEdit(null);
          }}
        />
        <Controls.Button
          className="buttonRow__btn btn-expense"
          text="Расход"
          variant="outlined"
          startIcon={<RemoveIcon />}
          background="#32b482"
          onClick={() => {
            setOpenExpense(true);
            setRecordForEdit(null);
          }}
        />
        <Controls.Button
          className="buttonRow__btn btn-transfer"
          text="Перевод"
          variant="outlined"
          startIcon={<SyncAltIcon />}
          background="#32b482"
          onClick={() => {
            setOpenTransfer(true);
            setRecordForEdit(null);
          }}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date.substring(0, 10)}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.money}</TableCell>
              <TableCell>{getCollection(item.balance, Service.getBalanceCollection())}</TableCell>
              <TableCell>
                {getCollection(item.categoryId, Service.getCategoryCollection())}
              </TableCell>
              <TableCell>
                {getCollection(item.contractorId, Service.getContractorCollection())}
              </TableCell>
              <TableCell>{getCollection(item.projectId, Service.getProjectCollection())}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
      <Popup title="Доход" openPopup={openIncome} setOpenPopup={setOpenIncome}>
        <Income recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Popup title="Расход" openPopup={openExpense} setOpenPopup={setOpenExpense}>
        <Expense recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Popup title="Перевод" openPopup={openTransfer} setOpenPopup={setOpenTransfer}>
        <Transfer recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
