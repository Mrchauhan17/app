// import { Pool } from 'pg'; 


// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'app',
//     password: '1234',
//     port: '5432', // Default PostgreSQL port
// });



// // Function to insert registration data into the database
// const insertRegistrationData = async (formData) => {
//     try {
//         console.log('User Type:', userType);
//         console.log('Form Data:', formData);
//         const query = `
//             INSERT INTO trucker_register (
//                 email,
//                 firstname,
//                 lastname,
//                 password,
//                 confirmpassword
//                 companyname,
//                 streetaddress,
//                 city,
//                 state,
//                 zipcode,
//                 country,
//                 companyphone,
//                 companywebsite,
//                 contactname,
//                 contactphone,
//                 businesstype,
//                 commoditytypes,
//                 additionalinformation,
//                 taxvatinfo,
//                 preferredpaymentmethod,
//                 termsagreed,
//                 marketingpreferences
//             ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
//         `;

//         // Extract form data values
//         const values = Object.values(formData);

//         // Execute the insert query
//         await pool.query(query, values);
//         console.log('Data inserted successfully!');
//     } catch (error) {
//         console.error('Error inserting data:', error);
//     }
// };


