const TablesImc = () => {
  return (
    <>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>&lt; 18,5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>18,5 - 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>25,0 - 29,9</td>
        </tr>
        <tr>
          <td>Obesidade grau I</td>
          <td>30,0 - 34,9</td>
        </tr>
        <tr>
          <td>Obesidade grau II</td>
          <td>35,0 - 39,9</td>
        </tr>
        <tr>
          <td>Obesidade grau III</td>
          <td>&ge; 40,0</td>
        </tr>
      </tbody>
    </>
  );
};

export default TablesImc;
