import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: 'Vndts Admin',
    description: 'Vndts Admin Dashboard'
}
const AdminLayout = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div>
            <div>
                <AdminNav/>
                {children}
            </div>
        </div>
     );
}
 
export default AdminLayout;