// import {useNavigate, useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axiosClient from "../axios-client.js";
// import {useStateContext} from "../context/ContextProvider.jsx";

// export default function UserForm() {
//   const navigate = useNavigate();
//   let {id} = useParams();
//   const [user, setUser] = useState({
//     id: null,
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: ''
//   })
//   const [errors, setErrors] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const {setNotification} = useStateContext()

//   if (id) {
//     useEffect(() => {
//       setLoading(true)
//       axiosClient.get(`/users/${id}`)
//         .then(({data}) => {
//           setLoading(false)
//           setUser(data)
//         })
//         .catch(() => {
//           setLoading(false)
//         })
//     }, [])
//   }

//   const onSubmit = ev => {
//     ev.preventDefault()
//     if (user.id) {
//       axiosClient.put(`/users/${user.id}`, user)
//         .then(() => {
//           setNotification('User was successfully updated')
//           navigate('/users')
//         })
//         .catch(err => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors)
//           }
//         })
//     } else {
//       axiosClient.post('/users', user)
//         .then(() => {
//           setNotification('User was successfully created')
//           navigate('/users')
//         })
//         .catch(err => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors)
//           }
//         })
//     }
//   }

//   return (
//     <>
//       {user.id && <h1>Update User: {user.name}</h1>}
//       {!user.id && <h1>New User</h1>}
//       <div className="card animated fadeInDown">
//         {loading && (
//           <div className="text-center">
//             Loading...
//           </div>
//         )}
//         {errors &&
//           <div className="alert">
//             {Object.keys(errors).map(key => (
//               <p key={key}>{errors[key][0]}</p>
//             ))}
//           </div>
//         }
//         {!loading && (
//           <form onSubmit={onSubmit}>
//             <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
//             <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
//             <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
//             <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
//             <button className="btn">Save</button>
//           </form>
//         )}
//       </div>
//     </>
//   )
// }

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axiosClient from "../axios-client.js";
// import { useStateContext } from "../context/ContextProvider.jsx";

// export default function UserForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [role, setRole] = useState("staff"); // Default role to staff
//   const [errors, setErrors] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { setNotification } = useStateContext();

//   useEffect(() => {
//     if (id) {
//       axiosClient
//         .get(`/users/${id}`)
//         .then(({ data }) => {
//           setName(data.name);
//           setEmail(data.email);
//           setRole(data.role);
//         })
//         .catch(() => {});
//     }
//   }, [id]);

//   const onSubmit = (ev) => {
//     ev.preventDefault();

//     const payload = {
//       name,
//       email,
//       password,
//       password_confirmation: passwordConfirmation,
//       role,
//     };

//     if (id) {
//       axiosClient
//         .put(`/users/${id}`, payload)
//         .then(() => {
//           setNotification("User was successfully updated");
//           navigate("/users");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     } else {
//       axiosClient
//         .post("/users", payload)
//         .then(() => {
//           setNotification("User was successfully created");
//           navigate("/users");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     }
//   };

//   return (
//     <div className="card animated fadeInDown">
//       <div className="form">
//         <form onSubmit={onSubmit}>
//           <h1 className="title">{id ? "Update User" : "New User"}</h1>
//           {errors && (
//             <div className="alert">
//               {Object.keys(errors).map((key) => (
//                 <p key={key}>{errors[key][0]}</p>
//               ))}
//             </div>
//           )}
//           <input
//             value={name}
//             onChange={(ev) => setName(ev.target.value)}
//             placeholder="Name"
//           />
//           <input
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             placeholder="Password"
//           />
//           <input
//             type="password"
//             value={passwordConfirmation}
//             onChange={(ev) => setPasswordConfirmation(ev.target.value)}
//             placeholder="Confirm Password"
//           />
//           <select value={role} onChange={(ev) => setRole(ev.target.value)}>
//             <option value="admin">Admin</option>
//             <option value="staff">Staff</option>
//           </select>
//           <button className="btn btn-block">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// is good
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axiosClient from "../axios-client.js";
// import { useStateContext } from "../context/ContextProvider.jsx";

// export default function UserForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [role, setRole] = useState("staff"); // Default role to staff
//   const [errors, setErrors] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { setNotification } = useStateContext();

//   useEffect(() => {
//     if (id) {
//       axiosClient
//         .get(`/users/${id}`)
//         .then(({ data }) => {
//           setName(data.name);
//           setEmail(data.email);
//           setRole(data.role);
//         })
//         .catch(() => {});
//     }
//   }, [id]);

//   const onSubmit = (ev) => {
//     ev.preventDefault();

//     const payload = {
//       name,
//       email,
//       password,
//       password_confirmation: passwordConfirmation,
//       role,
//     };

//     if (id) {
//       axiosClient
//         .put(`/users/${id}`, payload)
//         .then(() => {
//           setNotification("User was successfully updated");
//           navigate("/admin/users");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     } else {
//       axiosClient
//         .post("/users", payload)
//         .then(() => {
//           setNotification("User was successfully created");
//           navigate("/admin/users");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     }
//   };

//   return (
//     <div className="card animated fadeInDown">
//       <div className="form">
//         <form onSubmit={onSubmit}>
//           <h1 className="title">{id ? "Update User" : "New User"}</h1>
//           {errors && (
//             <div className="alert">
//               {Object.keys(errors).map((key) => (
//                 <p key={key}>{errors[key][0]}</p>
//               ))}
//             </div>
//           )}
//           <input
//             value={name}
//             onChange={(ev) => setName(ev.target.value)}
//             placeholder="Name"
//           />
//           <input
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             placeholder="Password"
//           />
//           <input
//             type="password"
//             value={passwordConfirmation}
//             onChange={(ev) => setPasswordConfirmation(ev.target.value)}
//             placeholder="Confirm Password"
//           />
//           <select value={role} onChange={(ev) => setRole(ev.target.value)}>
//             <option value="admin">Admin</option>
//             <option value="staff">Staff</option>
//           </select>
//           <button className="btn btn-block">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("staff"); // Default role to staff
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { setNotification } = useStateContext();

  useEffect(() => {
    if (id) {
      axiosClient
        .get(`/users/${id}`)
        .then(({ data }) => {
          setName(data.name);
          setEmail(data.email);
          setRole(data.role); // Ensure role is set when editing user
        })
        .catch(() => {});
    }
  }, [id]);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      role, // Include role in payload
    };

    if (id) {
      axiosClient
        .put(`/users/${id}`, payload)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/admin/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/users", payload)
        .then(() => {
          setNotification("User was successfully created");
          navigate("/admin/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <div className="card animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">{id ? "Update User" : "New User"}</h1>
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(ev) => setPasswordConfirmation(ev.target.value)}
            placeholder="Confirm Password"
          />
          <select value={role} onChange={(ev) => setRole(ev.target.value)}>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
          <button className="btn btn-block">Save</button>
        </form>
      </div>
    </div>
  );
}
