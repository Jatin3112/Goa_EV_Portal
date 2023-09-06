import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AdminNavbar from "./AdminBar/AdminNavbar";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ThemeProvider,
} from "@mui/material";
import mainTheme from "../../assets/theme/mainTheme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import baseURL from "../../assets/config";

function createData(id, email, password, role, actions) {
  return { id, email, password, role, actions };
}

function AdminManagement() {
  const [rows, setRows] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedRole, setEditedRole] = useState("");
  const [addingData, setAddingData] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/admin_management`
      );
      const data = response.data.map((item) =>
        createData(
          item.id,
          item.email,
          item.password,
          item.role,
          <div>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginRight: 1,
                backgroundColor: "#685BC7",
                "&:hover": {
                  backgroundColor: "#584da9",
                },
              }}
              onClick={() =>
                handleEdit(item.id, item.email, item.password, item.role)
              }
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleDelete(item.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
        )
      );
      setRows(data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(rows)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/admin/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id, email, password, role) => {
    setEditingId(id);
    setEditedEmail(email);
    setEditedPassword(password);
    setEditedRole(role);
  };

  const handleSave = (id) => {
    axios
      .put(`${baseURL}/admin/${id}`, {
        email: editedEmail,
        password: editedPassword,
        role: editedRole,
      })
      .then(() => {
        setEditingId(null);
        setEditedEmail("");
        setEditedPassword("");
        setEditedRole("");
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedEmail("");
    setEditedPassword("");
    setEditedRole("");
  };

  const handleAdd = () => {
    setAddingData(true);
  };

  const handleSaveNew = () => {
    axios
      .post(`${baseURL}/admin_management/add`, {
        email: newEmail,
        password: newPassword,
        role: newRole,
      })
      .then(() => {
        setAddingData(false);
        setNewEmail("");
        setNewPassword("");
        setNewRole("");
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelAdd = () => {
    setAddingData(false);
    setNewEmail("");
    setNewPassword("");
    setNewRole("");
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <AdminNavbar />
      <Box height={80} />
      <Box sx={{ display: "flex", paddingLeft: "50px" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 610 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Password</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((rowc) => (
                  <>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {editingId === rowc.id ? (
                          <input
                            type="text"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                          />
                        ) : (
                          rowc.email
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {editingId === rowc.id ? (
                          <input
                            type="text"
                            value={editedPassword}
                            onChange={(e) => setEditedPassword(e.target.value)}
                          />
                        ) : (
                          rowc.password
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {editingId === rowc.id ? (
                          <input
                            type="text"
                            value={editedRole}
                            onChange={(e) => setEditedRole(e.target.value)}
                          />
                        ) : (
                          rowc.role
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {editingId === rowc.id ? (
                          <>
                            <Button onClick={() => handleSave(rowc.id)}>
                              Save
                            </Button>
                            <Button onClick={handleCancel}>Cancel</Button>
                          </>
                        ) : (
                          rowc.actions
                        )}
                      </TableCell>
                    </TableRow>
                    {addingData && rowc.id === rows[rows.length - 1].id && (
                      <TableRow>
                        <TableCell>
                          <input
                            type="text"
                            placeholder="Email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <input
                            type="text"
                            placeholder="Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <input
                            type="text"
                            placeholder="Role"
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Button onClick={handleSaveNew}>Save</Button>
                          <Button onClick={handleCancelAdd}>Cancel</Button>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{
              position: "absolute",
              marginTop: "20px",
              right: "30px",
            }}
            onClick={handleAdd}
          >
            <EditIcon /> ADD
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminManagement;
