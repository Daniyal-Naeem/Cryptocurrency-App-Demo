import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest('get-user', handleGetUser);
}
