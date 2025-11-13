create database loja_online;
USE loja_online;

create table PessoaJuridica(
	idPessoaJuridica int auto_increment primary key,
    cnpj varchar(18) not null,
    nomeFantasia varchar(100),
    razaoSocial varchar(100)
);

create table PessoaFisica(
	idPessoaFisica int auto_increment primary key,
	cpf varchar(14) not null,
	nome varchar(100),
	dataNacimento date
);

create table Produto(
	idProduto int auto_increment primary key,
    nome varchar(100),
    preco decimal(10,2),
    idPessoaJuridica int,
    foreign key(idPessoaJuridica) references PessoaJuridica(idPessoaJuridica)
);

create table Compra(
	idCompra int auto_increment primary key,
    dataCompra date,
    idPessoaFisica int,
    idProduto int,
    foreign key (idPessoaFisica) references PessoaFisica(idPessoaFisica),
    foreign key (idProduto) references Produto(idProduto)
);

