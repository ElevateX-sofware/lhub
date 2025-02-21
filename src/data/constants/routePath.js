const RoutePath = {
  ADMIN: {
    BASE: '/admin',
    DASHBOARD: '/admin/dashboard',
    ANALYSIS: '/admin/analysis',
    COURSE: {
      BASE: '/admin/course',
      VIEW: '/admin/course/view',
      ADD: '/admin/course/add'
    },
    USERS: {
      BASE: '/admin/users',
      VIEW: '/admin/users/view',
      ADD: '/admin/users/add',
      USERS_DETAIL: '/admin/users/:userId',
    },
    SETTINGS: {
      BASE: '/admin/settings',
      GENERAL: '/admin/settings/general',
      SECURITY: '/admin/settings/security',
    },
    CONTENT: {
      BASE: '/admin/content',
      NOTIFICATIONS: '/admin/content/notifications',
      POSTS: '/admin/content/posts',
      COMMENTS: '/admin/content/comments',
      MEDIA: '/admin/content/media',
      STUDY_MATERIALS: '/admin/content/study-materials',
    }
  },
  HOME: '/',
  COURSES: '/courses',
  SCHEDULE: '/schedule',
  COURSES_DETAIL: '/courses/:courseId',
  PROFILE: '/user/profile',
  PROFILE_EDIT: '/user/profile/edit',
  TASKS: '/user/tasks',
  TASKS_DETAIL: '/user/tasks/:taskId',
  SETTINGS: {
    BASE: '/user/settings',
    NOTIFICATIONS: '/user/settings/notifications',
    PASSWORD: '/user/settings/password',
  },
  MY_COURSES: '/user/my-courses',
  STUDY: '/user/study',
  LIBRARY: '/user/library',
  ACCOUNT_SETTINGS: '/user/account-settings',
  LEARNING: '/user/learning',
  STUDY_MATERIALS: '/user/study-materials',
};

export default RoutePath;
