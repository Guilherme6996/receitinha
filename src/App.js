import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  // Estados para armazenar a lista de receitas e os campos do formulário
  const [receitas, setReceitas] = useState([]);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [tempoDuracao, setTempoDuracao] = useState("");
  const [editandoId, setEditandoId] = useState(null); // ID da receita que está sendo editada (se houver)

  // Carrega as receitas salvas no localStorage quando o componente é montado
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("receitas")) || [];
    setReceitas(dadosSalvos);
  }, []);

  // Salva a lista de receitas no localStorage sempre que ela for atualizada
  useEffect(() => {
    localStorage.setItem("receitas", JSON.stringify(receitas));
  }, [receitas]);

  // Limpa os campos do formulário
  const limparCampos = () => {
    setNome("");
    setIngredientes("");
    setModoPreparo("");
    setTempoDuracao("");
    setEditandoId(null);
  };

  // Lida com o envio do formulário (criar ou atualizar uma receita)
  const salvarReceita = (e) => {
    e.preventDefault();

    const novaReceita = {
      id: editandoId ?? Date.now(), // Se estiver editando, mantém o mesmo ID; senão, cria um novo
      nome,
      ingredientes,
      modoPreparo,
      tempoDuracao,
    };

    if (editandoId) {
      // Atualiza uma receita existente
      setReceitas(receitas.map((r) => (r.id === editandoId ? novaReceita : r)));
    } else {
      // Adiciona uma nova receita
      setReceitas([...receitas, novaReceita]);
    }

    limparCampos(); // Limpa os campos após salvar
  };

  // Preenche o formulário com os dados da receita selecionada para edição
  const editarReceita = (id) => {
    const r = receitas.find((r) => r.id === id);
    setNome(r.nome);
    setIngredientes(r.ingredientes);
    setModoPreparo(r.modoPreparo);
    setTempoDuracao(r.tempoDuracao);
    setEditandoId(id);
  };

  // Remove uma receita após confirmação
  const excluirReceita = (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      setReceitas(receitas.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>📚 CRUD de Receitas</h1>

      {/* Formulário de cadastro/edição */}
      <form onSubmit={salvarReceita} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Nome da Receita"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Ingredientes"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Modo de Preparo"
          value={modoPreparo}
          onChange={(e) => setModoPreparo(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Tempo de Duração (ex: 45 minutos)"
          value={tempoDuracao}
          onChange={(e) => setTempoDuracao(e.target.value)}
          required
        />
        <br />

        {/* Botões de ação */}
        <button type="submit">{editandoId ? "Atualizar" : "Salvar"}</button>
        {editandoId && <button onClick={limparCampos}>Cancelar</button>}
      </form>

      {/* Lista de receitas */}
      <h2>📒 Lista de Receitas</h2>
      {receitas.length === 0 ? (
        <p>Nenhuma receita cadastrada.</p>
      ) : (
        <ul>
          {receitas.map((r) => (
            <li key={r.id} style={{ marginBottom: "15px" }}>
              <strong>{r.nome}</strong>
              <p><b>Ingredientes:</b> {r.ingredientes}</p>
              <p><b>Modo de Preparo:</b> {r.modoPreparo}</p>
              <p><b>Tempo de Duração:</b> {r.tempoDuracao}</p>

              {/* Botões para editar e excluir a receita */}
              <button onClick={() => editarReceita(r.id)}>Editar</button>
              <button onClick={() => excluirReceita(r.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
