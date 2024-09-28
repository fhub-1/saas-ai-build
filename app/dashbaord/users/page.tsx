import UserTable from "@/components/_dashbaord/users/UserTable";

 
export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Management</h1>
      <UserTable />
    </div>
  )
}