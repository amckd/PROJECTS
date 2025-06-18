# Expense Tracker Web Application

This is a full-stack expense tracker web application built with the following tech stack:

- Frontend: React (functional components and hooks), Tailwind CSS for styling, Chart.js for graph visualization
- Backend: Node.js with Express
- Database: MongoDB with Mongoose
- API communication: RESTful APIs using axios on the frontend

## Features

- Add, edit, and delete expenses (title, amount, category, and date)
- Show expense list dynamically updated from the database
- Pie chart breaking down expenses by category
- Bar chart showing expenses over time
- Filtering by category and date
- Responsive design with Tailwind CSS

## Project Structure

- `server/`: Backend code (Express server, MongoDB connection, API routes)
- `client/`: Frontend React app

## Setup Instructions

### Backend

1. Navigate to the `server` directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example` and set your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the backend server:

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the `client` directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`.

## Usage

- Use the form to add new expenses.
- Edit or delete existing expenses from the list.
- Use filters to view expenses by category and date range.
- View visual charts for expense distribution and trends over time.

## Notes

- Ensure MongoDB is running and accessible via the connection string.
- The backend API URL is set to `http://localhost:5000/api/expenses` in the frontend code. Update if necessary.

## License

This project is open source and free to use.
