import { UserButton } from "@clerk/nextjs";

const DashBoardPage = () => {
  return (
    <div>
      <p>Dashboard</p>
      <UserButton  afterSignOutUrl="/"/>
    </div>
    
  )
}

export default DashBoardPage;