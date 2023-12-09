import { UserProfile } from 'components/Profile/Profile';
import user from 'JSON/user.json';

import { UserStatistic } from 'components/Statistic/Statistic';
import data from 'JSON/data.json';

import { Friends } from './Friend-list/Friends';
import friends from 'JSON/friends.json';

import { TransactionHistoryUser } from 'components/Transaction/Transaction';
import  transaction from 'JSON/transactions.json';

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
      <UserStatistic title="Statistic" stats={data} />
      <Friends friends={friends} />
      <TransactionHistoryUser items={transaction}/>
    </>
  );
};