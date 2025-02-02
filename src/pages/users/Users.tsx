import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";



    
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field:'img',
      headerName:'Avatar',
      width:100,
      renderCell:(params)=>(
          <img src={params.row.img || "/noavatar.png"} alt='' className='avatar'/>
      )
  },
 
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 100,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'number',
    width: 160,
  },
  {
    field:"verified",
    headerName:"Verified",
    width:100,
    type:"boolean",
},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14,  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users