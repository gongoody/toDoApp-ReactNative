import { connect } from "../database"

export const getTasks = async (req, res) =>{
    const dbConnection = await connect();
    const [rows] = await dbConnection.query('SELECT * FROM tasks')
    res.json(rows)
}

export const getTask = async (req, res) =>{
    const dbConnection = await connect();
    const [rows] = await dbConnection.query('SELECT * FROM tasks WHERE id=?', [req.params.id,])
    res.json(rows[0])
}

export const getTaskCount = async(req, res) =>{
    const dbConnection = await connect();
    const [rows] = await dbConnection.query('SELECT COUNT(*) FROM tasks')
    res.json(rows[0]['COUNT(*)'])
}

export const createTask = async(req, res) =>{
    res.send('Hello World')
}

export const deleteTask = async(req, res) =>{
    res.send('Hello World')
}

export const updateTask = (req, res) =>{
    res.send('Hello World')
}