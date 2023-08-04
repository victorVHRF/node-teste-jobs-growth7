# node-teste-jobs-growth7
#### teste em node para a growth7

Este é um projeto simples de agendamento de jobs em Node.js utilizando TypeScript. A aplicação recebe um conjunto de jobs e os agendam em sequências de execução, garantindo que cada sequência de jobs seja executada dentro de uma janela de 8 horas e respeite suas datas máximas de conclusão.

## Como Executar o Projeto

Instale as dependecias `npm install`
para iniciar a compilação execute `npx tsc`, isso ira criar um diretorio dist com os arquivos compilados em js
- Logo após execute `node dist/main.js`

O projeto será executado e você verá o conjunto de arrays contendo os jobs agendados conforme os critérios definidos.

## Como Executar os Testes
O projeto utiliza a biblioteca de testes Jest para realizar testes automatizados. Para executar os testes, siga os seguintes passos:
`npm test`
O Jest executará os testes automatizados e exibirá o resultado no terminal.

### Excplicação dos testes
- Teste: "should return an array with scheduled jobs"
Nesse teste, verificamos se a função scheduleJobs retorna um array. Isso é importante para garantir que a função esteja retornando o resultado esperado, ou seja, um conjunto de arrays com os jobs agendados corretamente.

- Teste: "should schedule each job within the 8-hour window"
Nesse teste, verificamos se todos os jobs em cada sequência (cada array de jobs) são agendados para serem executados em, no máximo, 8 horas. Para isso, somamos os tempos estimados de execução de cada job na sequência e comparamos com o limite de 8 horas.

- Teste: "should respect the maximum completion date for each job"
Nesse teste, garantimos que a data máxima de conclusão de cada job seja respeitada. Para fazer isso, percorremos todas as sequências de jobs e calculamos a data de conclusão de cada conjunto de jobs, levando em consideração os tempos estimados de execução de cada job. Então, comparamos essa data de conclusão com a data atual, garantindo que nenhum job seja concluído após sua data máxima de conclusão.

- Teste: "should schedule jobs in ascending order of maximum completion date"
Nesse teste, verificamos se os jobs são agendados em ordem crescente de data máxima de conclusão. Primeiro, pegamos o timestamp numérico da data máxima de conclusão do primeiro job em cada sequência e armazenamos na variável prevDate. Em seguida, percorremos todas as sequências e verificamos se a data máxima de conclusão do primeiro job em cada sequência é maior ou igual à data máxima de conclusão do último job na sequência anterior.

## Conclusão

Este é um projeto simples para demonstrar como agendar jobs em sequências utilizando TypeScript e Jest para testes automatizados. Sinta-se à vontade para explorar o código-fonte e os testes e fazer melhorias ou adições conforme necessário.

Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato. Divirta-se explorando o projeto!