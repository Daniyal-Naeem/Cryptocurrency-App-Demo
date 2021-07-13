import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/userSlice";
import { getUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(getUser);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
