-- :name 1 :!
-- :result :one
DO $$
BEGIN

ALTER TABLE USERS ADD COLUMN USR_Ses_FK VARCHAR(30) REFERENCES SESSIONS (SES_ID_PK);

ALTER TABLE Posts ALTER COLUMN pst_time TYPE timestampz;
ALTER TABLE Posts DROP COLUMN pst_shorturl;

ALTER TABLE Sessions DROP COLUMN SES_USR_ID_FK;

ALTER TABLE SESSIONS
ADD COLUMN SES_USR_ID_FK integer REFERENCES USERS(USR_ID_PK);

DROP TABLE Location;

CREATE TABLE IF NOT EXISTS LOCATION (
LOC_ID varchar(10) PRIMARY KEY,
LOC_ID_PK serial,
LOC_Alias varchar(20) NOT NULL,
LOC_State varchar(2)
);

INSERT INTO Location (LOC_ID, LOC_ALIAS, LOC_STATE)
VALUES ('28607', 'Boone', 'NC');

PERFORM F_DBVERSION(1);

END$$;

-- :name 2 :!
-- :result :one
DO $$
BEGIN

ALTER TABLE POSTS DROP COLUMN PST_LOC_FK;
ALTER TABLE POSTS ADD COLUMN PST_LOC_FK INT;

ALTER TABLE SESSIONS DROP COLUMN SES_LOC_FK;
ALTER TABLE SESSIONS ADD COLUMN SES_LOC_FK INT;

PERFORM F_DBVERSION(2);

END $$;

-- :name 3 :!
DO $$
BEGIN

ALTER TABLE USERS ALTER COLUMN USR_USERNAME DROP NOT NULL;
ALTER TABLE USERS ALTER COLUMN USR_EMAIL DROP NOT NULL;
ALTER TABLE USERS ALTER COLUMN USR_CREATEDON TYPE TIMESTAMPTZ;

PERFORM F_DBVERSION(3);

END $$;

-- :name 4 :!

DO $$
BEGIN

-- ALTER TABLE POSTS ALTER COLUMN PST_LOC_FK NOT NULL;

ALTER TABLE SESSIONS ALTER COLUMN SES_USR_ID_FK SET DEFAULT -1;

PERFORM F_DBVERSION(4);

END $$

-- :name 5 :!

DO $$
BEGIN

ALTER TABLE POSTS ADD COLUMN PST_PARENT_FK INT REFERENCES POSTS(PST_ID_PK);

PERFORM F_DBVERSION(5);

END $$

-- :name 6 :!

DO $$
BEGIN

ALTER TABLE POSTS ADD COLUMN PST_HASCOMMENTS BOOLEAN;

PERFORM F_DBVERSION(6);

END $$

-- :name 7 :!

DO $$
BEGIN 

ALTER TABLE USERS ADD COLUMN email_verified boolean default false;

CREATE TABLE email_verification(ev_usr_fk integer REFERENCES USERS(usr_id_pk), ev_key varchar(20) unique);

PERFORM F_DBVERSION(7);

END $$;

-- :name 8 :!

DO $$
BEGIN

ALTER TABLE USERS ALTER COLUMN USR_EMAIL DROP NOT NULL;

END $$;













CREATE TABLE IF NOT EXISTS IMAGE_FILE_TYPES (
       IFT_PK SERIAL PRIMARY KEY,
       IFT_Type VARCHAR(10)
);

INSERT INTO IMAGE_FILE_TYPES(IFT_Type) VALUES ('jpg');
INSERT INTO IMAGE_FILE_TYPES(IFT_Type) VALUES ('png');
INSERT INTO IMAGE_FILE_TYPES(IFT_Type) VALUES ('gif');
INSERT INTO IMAGE_FILE_TYPES(IFT_Type) VALUES ('webm');
INSERT INTO IMAGE_FILE_TYPES(IFT_Type) VALUES ('bmp');

ALTER TABLE IMAGES ALTER COLUMN IMG_Type_FK SET DEFAULT 0;
ALTER TABLE IMAGES DROP COLUMN IMG_FILE;
ALTER TABLE IMAGES ADD COLUMN IMG_Data BYTEA NOT NULL;
ALTER TABLE IMAGES DROP COLUMN IMG_THUMBNAIL;
ALTER TABLE IMAGES ADD COLUMN IMG_THUMBNAIL BYTEA NOT NULL;

ALTER TABLE POSTS ADD COLUMN PST_IMG_FK REFERENCES IMAGES(IMG_ID_PK) DEFAULT NULL;

CREATE TABLE IF NOT EXISTS URL (
       URL_ID VARCHAR(24) PRIMARY KEY, 
       URL_Long VARCHAR(500)
);
ALTER TABLE POSTS DROP COLUMN PST_Shorturl;
ALTER TABLE POSTS ADD COLUMN PST_URL_ID VARCHAR(24);

PERFORM F_DBVERSION(7);

END $$



-- yeet
