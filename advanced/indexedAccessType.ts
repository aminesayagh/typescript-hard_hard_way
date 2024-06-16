
interface UserRole {
    user: ['read', 'write', 'delete'],
    admin: ['read', 'write', 'delete', 'create']
}

type Roles = keyof UserRole[keyof UserRole][number]; // 'read' | 'write' | 'delete' | 'create'