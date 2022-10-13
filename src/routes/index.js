import { lazy } from 'react';

const ListRoutes = [
    {
        path: '/jurnal',
        component: lazy(() =>
            import('../components/jurnal/Jurnal')
        )
    },
    {
        path: '/absen',
        component: lazy(() =>
            import('../components/absensi/absensi')
        )
    }
];

export { ListRoutes };