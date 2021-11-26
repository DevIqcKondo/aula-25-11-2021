using System;
using Microsoft.AspNetCore.Mvc;
using aula_25_11_2021.Models;

namespace aula_25_11_2021.Controllers 
{
    [ApiControler]
    [Route("[controller]")]
    public class aula_25_11_2021
    {
        [HttpPost]
        public Nomes Post(NomeCliente nomeRecebido)
        {
            var nomeProcessado = new Nomes {
                nomeCompleto = $"{nomeRecebido.nome} {nomeRecebido.sobrenome}",
                nomeCatalogo = $"{nomeRecebido.sobrenome.ToUpper()} {nomeRecebido.nome}",
            };
            return nomeProcessado;

        }
    }
}