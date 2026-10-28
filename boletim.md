
# Atividade E13 — Boletim

## 1. Regra inicial

SE a média for maior ou igual a 7:
  O aluno está aprovado.
SENÃO:
  O aluno está reprovado.

## 2. Nova regra

SE a média for maior ou igual a 6:
  O aluno está aprovado.
SENÃO:
  O aluno fica em recuperação.

## 3. Quantas linhas foram alteradas?

Foram alteradas 12 linhas no total.

- 6 condições: média de 7 para 6.
- 6 mensagens: de Reprovado para Em recuperação.

## 4. Investigação

É possível escrever a regra uma única vez
e utilizá-la para os seis alunos?

Sim. Podemos usar listas (arrays) para guardar
os nomes e as médias dos alunos.

Depois, usamos um laço for para percorrer
essas listas e executar a mesma condição
if/else para cada aluno.

Assim, não precisamos repetir o mesmo
bloco de código seis vezes.

Isso facilita a manutenção do programa.
Se a média mínima mudar novamente,
basta alterar uma condição.
