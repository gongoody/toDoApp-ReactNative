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
    const dbConnection = await connect();
    await dbConnection.query("INSERT INTO tasks(title, description) VALUES(?,?)",[
        req.body.title,
        req.body.description
    ]);
    res.send("Task created")
}

export const deleteTask = async(req, res) =>{
    const dbConnection = await connect();
    await dbConnection.query("DELETE FROM tasks WHERE id =?",[
        req.params.id,
    ]);
    res.send("Task deleted succesfully")
}

export const updateTask = async (req, res) =>{
    const dbConnection = await connect();
    const result = await dbConnection.query("UPDATE tasks SET ? WHERE id=?",[
        req.body,
        req.params.id
    ])
    res.send("Task modified")
}