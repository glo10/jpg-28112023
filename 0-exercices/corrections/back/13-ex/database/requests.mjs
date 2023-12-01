export default {
  create: `
    CREATE TABLE user
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      lastname VARCHAR(70),
      firstname VARCHAR(70),
      email VARCHAR(50),
      password VARCHAR(72),
      age SMALLINT,
      country VARCHAR(100),
      city VARCHAR(100),
      longitude DECIMAL(2, 6),
      latitude DECIMAL(2, 6),
      CONSTRAINT uk_email UNIQUE(email)
    )`,
  isTableExist: `
    SELECT * 
    FROM sqlite_master
    WHERE name="user" AND type="table"`,
  select: `
    SELECT *
    FROM user
    WHERE email = ? AND password = ?
  `,
  login: `
    SELECT *
    FROM user
    WHERE email = ?
`,
  insert: `
    INSERT INTO user(
      lastname,
      firstname,
      email,
      password,
      age,
      country,
      city,
      longitude,
      latitude
    )
    VALUES (?,?,?,?,?,?,?,?,?)`
}
