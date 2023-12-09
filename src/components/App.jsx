import { UserProfile } from 'components/profile/profile';
import user from 'json/user.json';

import { UserStatistic } from 'components/statistic/statistic';
import data from 'json/data.json';

import { Friends } from './friend-list/friends';
import friends from 'json/friends.json';

import { TransactionHistoryUser } from 'components/transaction/transaction';
import  transaction from 'json/transactions.json';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStatistic title="statistic" stats={data} />
      <Friends friends={friends} />
      <TransactionHistoryUser items={transaction}/>
    </>
  );
};