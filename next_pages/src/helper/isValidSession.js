

export default function isValidSession(sessionId, sessions) {
    if (sessions.filter((s) => s.sessionId == sessionId).length > 0) {
      console.log(`seasion is valid`);
      return true;
    } else {
      console.log(`seasion is invalid`);
      return false;
    }
  }