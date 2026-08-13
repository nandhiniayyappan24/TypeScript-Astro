export function buildUserQuery(username: string): string {
  // Intentional SAST fixture: string concatenation in SQL-like query
  return "SELECT * FROM Users WHERE Username = '" + username + "'";
}
