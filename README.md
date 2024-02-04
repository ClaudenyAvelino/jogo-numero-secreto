# Revisão github
1. Criar conta no github
2. Criar repositório no github
3. Instalar git no PC fazendo Download para o seu SO.
* Sistema de controle de versão distribuído gratuito [Faça download aqui](https://git-scm.com/) do Git.
>Observação verificar e adicionar o Git nas variaveis de ambiente do seu SO.
4. No diretório onde você quira seu projeto inicie o repositório com o seguinte comando.
>git init
5. O comando git init transforma o diretório atual em um repositório do Git.
6. Adicionar todos os arquivos do repositório.
>git add .
7. Gerar chave SSH
Para gerar a chave, existe um comando que temos que copiar. Inclusive, existe um tutorial no próprio site do GitHub
[como gerar uma chave SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Exemplo:
>ssh-keygen -t ed25519 -C "seu usuario".

8. Sincronizar repositórios.
>git push -u origin main

9. Sincronizar repositórios remoto com local.

>git push -u origin main

10. Listar os repositórios remotos:
>git remote -v

11. Remover um repositório remoto:

>git remote remove origin

12. Alterar a URL de um repositório remoto:

>git remote set-url origin https://github.com/seu-usuario/seu-repositorio.git

13. Alterar o apelido de um repositório remoto:

>git remote rename origin novo-origin

# Clona Repositório

>git clone "endereço repositorio"

1. Exibir relatório status de arquivos alterados

>git status

2. Puxa os commits do remoto para o local.

>git pull origin main

3. Para verificarmos se isso foi feito

>`git log`

## Resolvendo erro
Conflito gerado não foi resolvido

* Para isso você deve primeiramente abortar o merge:
>git merge --abort
* E então você precisa resolver o conflito atual no código, vendo o que está diferente do seu código com o que veio do pull
* Após a resolução você precisa commitar esta resolução:
>git commit -a -m "Resolvendo conflito"
* E por último realizar o pull novamente:
>git pull
* Agora o código virá corretamente do repo remoto, e você estará com o erro resolvido também 🙂

##  O comando para apagar um commit

>git reset --hard "id comit"


## Alterar a mensagem do commit.

>git commit --amend -m "mensagem"





## Jogo número secreto