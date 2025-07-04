const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const jogadores = [];

io.on('connection', (socket) => {
  console.log('Um jogador conectou:', socket.id);

  socket.on('conectar', (nome) => {
    jogadores.push({ id: socket.id, nome, conectadoEm: new Date() });
    io.emit('jogadores_atualizados', jogadores);
  });

  socket.on('disconnect', () => {
    const index = jogadores.findIndex(j => j.id === socket.id);
    if (index !== -1) jogadores.splice(index, 1);
    io.emit('jogadores_atualizados', jogadores);
    console.log('Jogador desconectou:', socket.id);
  });
});

app.get('/jogadores', (req, res) => {
  res.json(jogadores);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.IO rodando na porta ${PORT}`);
});