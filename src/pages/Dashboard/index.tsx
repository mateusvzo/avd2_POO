import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, Table } from './styles';


interface EventoInterface {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike:number;
}

const Dashboard: React.FC = () => {
  const [evento, setEvento] = useState<EventoInterface[]>([]);

  async function loadData(): Promise<void> {
      const response = await api.get('/events')
      //console.log(response)
      setEvento(response.data)
  }

  async function deletarEvento(id: string) {
    await api.delete(`/events/${id}`)
    window.location.reload()
  }

  async function like(id: string) {
    await api.post(`/events/like/${id}`)
    loadData()
  }

  async function dislike(id: string){
    await api.post(`/events/dislike/${id}`)
    loadData();
  }

  async function handlesubmit(event: any) {
    event.preventDefault();
    //console.log(event.target)

    const cadastrarEvento = {
      nomeevento: event.target.nomeevento.value,
      local: event.target.local.value,
      diasemana: event.target.diasemana.value,
      horario: event.target.horario.value,
    }
    //console.log(cadastrarEvento)

    const novoEvento = await api.post('/events', cadastrarEvento);

    setEvento([...evento, novoEvento.data]);
  }

  useEffect(() =>{
    loadData()
  }, [])

  return (
    <Container>
      <h1>CADASTRO DE EVENTOS</h1>
      <form onSubmit={handlesubmit}>
        <input type='text' name='nomeevento' placeholder='Nome do Evento' />
        <input type='text' name='local' placeholder='Local do Evento' />
        <input type='text' name='diasemana' placeholder='Dia da Semana' />
        <input type='text' name="horario" placeholder="Horário" />
        <button type="submit">Salvar</button>
      </form>
      <Table>
          <tr>
            <th>Nome Evento:</th>
            <th>Local:</th>
            <th>Dia da Semana:</th>
            <th>Horario:</th>
            <th>Botões:</th>
            <th>Like:</th>
            <th>Dislike:</th>
          </tr>
          {evento.map((e, index) => (
            <>
              <tr key={index}>
                <td>{e.nomeevento}</td>
                <td>{e.local}</td>
                <td>{e.diasemana}</td>
                <td>{e.horario}</td>
                <td>
                  <button onClick={() => deletarEvento(e.id)}>Remover</button>
                  <button onClick={() => like(e.id)}>Like</button>
                  <button onClick={() => dislike(e.id)} >Dislike</button>
                </td>
                <td>{e.like ? e.like : 0}</td>
                <td>{e.dislike ? e.dislike : 0}</td>
              </tr>
            </>
          ))}
      </Table>
    </Container>

  )
}

export default Dashboard



