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


## Reverter um commit
Com o git log identificamos o id do commit a reverter.

exemplo.
commit f3bff2f7ae4755c2c29e1ad5caf63d5ba293030d
:...skipping...
commit 39ff30b554bee022449fba88f955ee4d5c236592 (HEAD -> main)
Author: claudeny avelino <claudeny.avelino@hotmail.com>
Date:   Sun Feb 4 12:07:33 2024 -0300

    Atualiza README editar remover commit

commit f3bff2f7ae4755c2c29e1ad5caf63d5ba293030d
Author: claudeny avelino <claudeny.avelino@hotmail.com>
Date:   Sat Feb 3 15:46:56 2024 -0300

    Resolvendo conflito Readme

commit 6da51cda04ea94a0733ac68c5f754893907f6a1e
Merge: 1f55de8 4b182c3
Author: claudeny avelino <claudeny.avelino@hotmail.com>
Date:   Sat Feb 3 15:40:05 2024 -0300

    Merge branch 'main' of github.com:ClaudenyAvelino/jogo-numero-secreto

commit 1f55de85b090b824b63e182e3a8ac866fb56e2aa

O commit que queremos desfazer é o.
>commit f3bff2f7ae4755c2c29e1ad5caf63d5ba293030d

comando.
>git revert f3bff2f7ae4755c2c29e1ad5caf63d5ba293030d

Proseguimos com
>git push origin main

Com isso,sincronizamos e enviamos esse commit de revert para o repositório remoto, permitindo que outras pessoas possam baixá-lo.
