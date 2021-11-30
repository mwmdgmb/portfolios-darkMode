import { all } from 'redux-saga/effects';
import sampleRequest from './Sample/saga';

export default function* rootSaga() {
	yield all([sampleRequest()]);
}
