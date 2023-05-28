const employeesData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      position: 'Manager',
      department: 'Sales',
      location: 'New York',
      phone: '1234567890',
      Email: 'john.doe@example.com',
      isOnLeave: false,
      imageId: 3760373,
      dob: new Date('1990-01-01'),
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA'
      },
      ssn: 123456789
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      position: 'Engineer',
      department: 'IT',
      location: 'Boston',
      phone: '9876543210',
      Email: 'jane.smith@example.com',
      isOnLeave: true,
      imageId: 3760373,
      dob: new Date('1992-05-10'),
      address: {
        street: '456 Elm St',
        city: 'Boston',
        state: 'MA',
        country: 'USA'
      },
      ssn: 987654321
    },
    {
        firstName: 'Sarah',
        lastName: 'Johnson',
        position: 'Marketing Specialist',
        department: 'Marketing',
        location: 'Dublin',
        phone: '5551112222',
        Email: 'sarah.johnson@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1988-09-15'),
        address: {
          street: '789 Park Ave',
          city: 'Dublin',
          state: 'OH',
          country: 'USA'
        },
        ssn: 555444333
      },
      {
        firstName: 'Robert',
        lastName: 'Anderson',
        position: 'Financial Analyst',
        department: 'Finance',
        location: 'London',
        phone: '9998887777',
        Email: 'robert.anderson@example.com',
        isOnLeave: true,
        imageId: 3760373,
        dob: new Date('1991-07-20'),
        address: {
          street: '321 Oak St',
          city: 'London',
          state: 'ENG',
          country: 'UK'
        },
        ssn: 999888777
      },
      {
        firstName: 'Emily',
        lastName: 'Brown',
        position: 'Software Developer',
        department: 'IT',
        location: 'New York',
        phone: '4445556666',
        Email: 'emily.brown@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1989-12-05'),
        address: {
          street: '456 Elm St',
          city: 'New York',
          state: 'NY',
          country: 'USA'
        },
        ssn: 444555666
      },
      {
        firstName: 'Daniel',
        lastName: 'Wilson',
        position: 'Operations Manager',
        department: 'Operations',
        location: 'Tokyo',
        phone: '7778889999',
        Email: 'daniel.wilson@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1985-03-18'),
        address: {
          street: '789 Sakura St',
          city: 'Tokyo',
          state: 'Tokyo',
          country: 'Japan'
        },
        ssn: 777888999
      },
      {
        firstName: 'Olivia',
        lastName: 'Taylor',
        position: 'Sales Representative',
        department: 'Sales',
        location: 'Boston',
        phone: '2223334444',
        Email: 'olivia.taylor@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1993-06-25'),
        address: {
          street: '555 Maple Ave',
          city: 'Boston',
          state: 'MA',
          country: 'USA'
        },
        ssn: 222333444
      },
      {
        firstName: 'Matthew',
        lastName: 'Garcia',
        position: 'HR Manager',
        department: 'HR',
        location: 'London',
        phone: '6667778888',
        Email: 'matthew.garcia@example.com',
        isOnLeave: true,
        imageId: 3760373,
        dob: new Date('1987-11-10'),
        address: {
          street: '777 Rose St',
          city: 'London',
          state: 'ENG',
          country: 'UK'
        },
        ssn: 666777888
      },
      {
        firstName: 'Sophia',
        lastName: 'Lee',
        position: 'Data Analyst',
        department: 'Analytics',
        location: 'Dublin',
        phone: '8889990000',
        Email: 'sophia.lee@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1990-04-12'),
        address: {
          street: '888 Pine St',
          city: 'Dublin',
          state: 'OH',
          country: 'USA'
        },
        ssn: 888999000
      },
      {
        firstName: 'Ethan',
        lastName: 'Martinez',
        position: 'Quality Assurance Engineer',
        department: 'IT',
        location: 'Tokyo',
        phone: '3334445555',
        Email: 'ethan.martinez@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1992-09-28'),
        address: {
          street: '999 Sakura St',
          city: 'Tokyo',
          state: 'Tokyo',
          country: 'Japan'
        },
        ssn: 333444555
      },
      {
        firstName: 'Ava',
        lastName: 'Rodriguez',
        position: 'Research Scientist',
        department: 'R&D',
        location: 'New York',
        phone: '7778889999',
        Email: 'ava.rodriguez@example.com',
        isOnLeave: false,
        imageId: 3760373,
        dob: new Date('1986-08-17'),
        address: {
          street: '123 Oak St',
          city: 'New York',
          state: 'NY',
          country: 'USA'
        },
        ssn: 777888999
      },
      {
        firstName: 'Liam',
        lastName: 'Lopez',
        position: 'Project Manager',
        department: 'Operations',
        location: 'Tokyo',
        phone: '1112223333',
        Email: 'liam.lopez@example.com',
        isOnLeave: true,
        imageId: 3760373,
        dob: new Date('1989-12-01'),
        address: {
          street: '456 Sakura St',
          city: 'Tokyo',
          state: 'Tokyo',
          country: 'Japan'
        },
        ssn: 111222333
      },
  ];
  
  module.exports = employeesData;







// // eslint-disable-next-line
// export default [
//     {
//         fName: 'James', 
//         lName: 'King',
//         position: 'President and CEO',
//         phoneOffice: '781-000-0001',
//         phoneMobile: '617-000-0001',
//         SMS: '617-000-0001',
//         Email: 'king@fakemail.com',
//         imageId: 3760373
//     },
//     {
//         fName: 'Julie',
//         lName: 'Taylor',
//         position: 'VP of Marketing',
//         phoneOffice: '781-000-0002',
//         phoneMobile: '617-000-0002',
//         SMS: '617-000-0002',
//         Email: 'taylor@fakemail.com'
//     },
//     {
//         fName: 'Eugene',
//         lName: 'Lee',
//         position: 'CFO',
//         phoneOffice: '781-000-0003',
//         phoneMobile: '617-000-0003',
//         SMS: '617-000-0003',
//         Email: 'lee@fakemail.com'
//     },
//     {
//         fName: 'John',
//         lName: 'Williams',
//         position: 'VP of Engineering',
//         phoneOffice: '781-000-0004',
//         phoneMobile: '617-000-0004',
//         SMS: '617-000-0004',
//         Email: 'williams@fakemail.com'
//     },
//     {
//         fName: 'Ray',
//         lName: 'Moore',
//         position: 'VP of Sales',
//         phoneOffice: '781-000-0005',
//         phoneMobile: '617-000-0005',
//         SMS: '617-000-0005',
//         Email: 'moore@fakemail.com'
//     },
//     {
//         fName: 'Paul',
//         lName: 'Jones',
//         position: 'QA Manager',
//         phoneOffice: '781-000-0006',
//         phoneMobile: '617-000-0006',
//         SMS: '617-000-0006',
//         Email: 'jones@fakemail.com'
//     },
    
// ]
