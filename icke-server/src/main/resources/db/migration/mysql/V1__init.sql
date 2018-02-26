create table link (project_id varchar(40) not null, title varchar(1024), url varchar(1024)) ENGINE=INNODB CHARACTER SET utf8 COLLATE utf8_bin;
create table project (id varchar(40) not null, customer_name varchar(255), customer_url varchar(255), description longtext, interval_from date, interval_to date, title varchar(500), primary key (id)) ENGINE=INNODB CHARACTER SET utf8 COLLATE utf8_bin;
alter table project add constraint UNIQUE_TITLE_INTERVAL unique (title, interval_from, interval_to);
alter table link add constraint FK_PROJECT_ID foreign key (project_id) references project (id);

