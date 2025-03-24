# How to run :
 Install Dependencies - npm install
# database setup 
-> Set Up Database (MySQL) :
-> database - CREATE DATABASE leave_management;
-> tables :
1.
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    department VARCHAR(50)
);
2.
CREATE TABLE leaverequests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    start_date DATE,
    end_date DATE,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    reason TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

dummy data for employee table :

INSERT INTO employees (id, name, email, department) VALUES
(2, 'John Doe', 'john.doe@example.com', 'IT'),
(3, 'Alice Smith', 'alice.smith@example.com', 'HR'),
(4, 'Bob Johnson', 'bob.johnson@example.com', 'Finance'),
(5, 'Charlie Brown', 'charlie.brown@example.com', 'Marketing'),
(6, 'David Wilson', 'david.wilson@example.com', 'Operations'),
(7, 'Emma Watson', 'emma.watson@example.com', 'Sales');


-> Now Start the Server - npm start

# API Testing with Postman:

-> create new collection and add new request:
1. Submit Leave request :
   method - POST
   url - http://localhost:5000/api/leave
   header -> Content-Type : application/json
   body -> (raw json)
   {
    "employee_id": 2,
    "start_date": "2024-04-01",
    "end_date": "2024-04-05",
    "reason": "Family Vacation"
   }
   
2. Fetch all leave requests :
   method - GET
   url - http://localhost:5000/api/leave
   
3. Approve/Reject a leave request :
   method - PUT
   url - http://localhost:5000/api/leave/:leaveId // change leave id based on table according to you
   header -> Content-Type : application/json
   body ->
   {
    "status": "approved" // or rejected as per choice
   }

4. Fetch leave requests of a specific employee to get to know about the status :
   method - GET
   url - http://localhost:5000/api/leave/employee/:empID // change employee id based on table
   
   
