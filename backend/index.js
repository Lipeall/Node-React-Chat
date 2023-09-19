const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const result = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"Private-key": "aa1d0c19-d8cd-4e0d-85ea-82032639f7a3" }}
    );
	if (result) {
		return res.status(result.status).json(result.data);
	  } else {
		return res.status(500).json({ message: "Erro interno do servidor" });
	}
  } catch (e) {	
	console.error("Erro na solicitação:", e);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.listen(3001);