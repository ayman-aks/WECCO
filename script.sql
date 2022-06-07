use wecco;
create table Customer(id_customer int auto_increment primary key,email varchar(255) unique);
create table Item( id_item int auto_increment primary key, id_customer int,constraint FK_CustomerItem foreign key(id_customer) references Customer(id_customer));
create table Discussion(
id_discussion int auto_increment primary key,
id_customer_sender int,
id_customer_receiver int,
id_item int,
constraint FK_CustomerSenderDiscussion foreign key(id_customer_sender) references Customer(id_customer),
constraint FK_CustomerReceiverDiscussion foreign key(id_customer_receiver) references Customer(id_customer),
constraint FK_ItemDiscussion foreign key(id_item) references Item(id_item));
create table Message( id_message int auto_increment primary key,
id_discussion int,
id_customer_sender int,
constraint FK_DiscussionMessage foreign key(id_discussion) references Discussion(id_discussion),
constraint FK_CustomerMessage foreign key(id_customer_sender) references Customer(id_customer)
);
