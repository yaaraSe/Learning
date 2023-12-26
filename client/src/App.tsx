import { Route, Routes } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
// import GoalServices from '@Components/GoalServices/GoalServices';
// import ProtectRoute from '@CommonComponents/ProtectRoute/ProtectRoute';
// import GoalsContainer from '@Components/GoalServices/GoalsContainer/GoalsContainer';
// import { ROUTE_NOT_FOUND } from '@CommonConstants';
// import CreateUpdateAssignment from '@Components/GoalServices/CreateUpdateAssignment/CreateUpdateAssignment';
// import { useGetSystemSettingByName } from '@ApiService/Requests/useSystemSettings';
// import {
//   Administrator,
//   CreateUpdateScenario,
//   DemoAuthorization,
//   NoAuthorization,
//   ProjectStatus,
//   Assignments,
//   CreateUpdateGoal,
// } from '@Utils/LazySuspense';
// import BottomBar from '@CommonComponents/BottomBar/BottomBar';
// import useSignalR from '@Hooks/useSignalR';
// import { useAuthorization } from '@Hooks/useAuthorization';

const App = () => {
  // useAuthorization();
  // useSignalR();
  // useGetSystemSettingByName('Update Information');

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Cards/>
            // <ProtectRoute>
            //   <GoalServices />
            // </ProtectRoute>
          }
        >
          {/* <Route index element={<GoalsContainer />} />
          <Route path='Goal' element={<CreateUpdateGoal />} />
          <Route path='Goal/:goalId' element={<CreateUpdateGoal />} />
          <Route path='Assignment?' element={<CreateUpdateAssignment />} />
          <Route path='Assignment/:assignmentId' element={<CreateUpdateAssignment />} /> */}
        </Route>

        {/* <Route
          path='/Administrator'
          element={
            <ProtectRoute>
              <Administrator />
            </ProtectRoute>
          }
        >
          <Route path='Scenario' element={<CreateUpdateScenario />} />
          <Route path='Scenario/:scenarioId' element={<CreateUpdateScenario />} />
        </Route> */}

        {/* <Route
          path='/Assignments'
          element={
            <ProtectRoute>
              <Assignments />
            </ProtectRoute>
          }
        />
        <Route path='/DemoAuthorization' element={<DemoAuthorization />} />
        <Route path='/NoAuthorization' element={<NoAuthorization />} />
        <Route path='/ProjectStatus' element={<ProjectStatus />} />
        <Route path='*' element={<>{ROUTE_NOT_FOUND}</>} /> */}
      </Routes>
      {/* <BottomBar /> */}
    </>
  );
};

export default App;
