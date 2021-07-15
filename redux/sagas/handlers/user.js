import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/userSlice";
import { getUsers } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(getUsers);
    yield put(setUser(response.user));
  } catch (error) {
    console.log('handleGetUser->error', error);
  }
}
