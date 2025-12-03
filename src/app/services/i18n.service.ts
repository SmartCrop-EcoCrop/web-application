import { Injectable, inject, signal } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

export type Language = 'en-US' | 'es-ES';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private localeId = inject(LOCALE_ID);
  currentLanguage = signal<Language>(this.getInitialLanguage());
  
  private translations: Record<Language, Record<string, string>> = {
    'en-US': {
      // Login page
      'login.title': 'Sign In',
      'login.username': 'Username',
      'login.usernameP': 'Enter your username',
      'login.password': 'Password',
      'login.passwordP': 'Enter your password',
      'login.remember': 'Remember me',
      'login.forgot': 'Forgot your password?',
      'login.button': 'Sign In',
      'login.noAccount': "Don't have an account?",
      'login.register': 'Register',
      
      // Register page
      'register.title': 'Create Account',
      'register.username': 'Username',
      'register.email': 'Email',
      'register.password': 'Password',
      'register.confirmPassword': 'Confirm Password',
      'register.button': 'Register',
      'register.haveAccount': 'Already have an account?',
      'register.login': 'Sign In',
      
      // Dashboard
      'dashboard.title': 'Farmer Dashboard',
      'dashboard.realTimeView': 'Real-time View',
      'dashboard.currentTemp': 'Current Temperature',
      'dashboard.humidity': 'Humidity',
      'dashboard.wind': 'Wind',
      'dashboard.forecast': 'Forecast',
      'dashboard.viewHistory': 'View History',
      
      // Header navigation
      'header.dashboard': 'Dashboard',
      'header.forum': 'Forum',
      'header.weather': 'Weather',
      'header.news': 'News',
      
      // Sidebar
      'sidebar.temperature': 'Temperature',
      'sidebar.realTime': 'View plants in real time',
      'sidebar.temporal': 'View temporal record',
      'sidebar.plagas': 'Pest Identification',
      'sidebar.alertas': 'Alerts and notifications',
      'sidebar.redAgricultores': 'Farmers network',
      'sidebar.guias': 'Practical guides and recommendations',
      'sidebar.perfil': 'Profile',
      'sidebar.foro': 'Forum',
      'sidebar.clima': 'Weather',
      'sidebar.noticias': 'News',
      
      // Alertas page
      'alertas.title': 'Alerts and Notifications',
      'alertas.subtitle': 'Monitor critical events and recommendations for your crops.',
      'alertas.tabClimate': 'Climate',
      'alertas.tabPests': 'Pests',
      'alertas.tabHumidity': 'Humidity',
      'alertas.tabActions': 'Actions',
      'alertas.tabGeneral': 'General',
      'alertas.lowHumidity': 'Low Humidity',
      'alertas.lowHumidityDesc': 'Low humidity levels were detected in sector B. Immediate irrigation is recommended.',
      'alertas.urgent': 'Urgent',
      'alertas.alertHistory': 'Alert History',
      'alertas.highTemp': 'High Temperature',
      'alertas.highTempDesc': 'Temperature in sector B exceeded 35°C. It is recommended to activate the sprinkler irrigation system.',
      'alertas.whitefly': 'Whitefly',
      'alertas.whiteflyDesc': 'An increase in the whitefly population was detected in the pepper crop. Preventive treatment is recommended.',
      'alertas.realTimeAlert': 'Real-time Alert',
      'alertas.frostAlert': 'Frost Alert',
      'alertas.frostAlertDesc': 'A severe frost is expected in the next 3 hours. Protect your crops.',
      'alertas.viewDetails': 'View Details →',
      'alertas.config': 'Configuration',
      'alertas.customizeNotif': 'Customize Notifications',
      'alertas.viewFullHistory': 'View Full History',
      
      // Clima page
      'clima.title': 'Weather and Forecast',
      'clima.subtitle': 'Updated weather information to optimize your crop planning.',
      'clima.sunny': 'Sunny',
      'clima.humidity': 'Humidity',
      'clima.weeklyForecast': 'Weekly Forecast',
      'clima.monday': 'Monday',
      'clima.wednesday': 'Wednesday',
      'clima.alertsRec': 'Alerts and Recommendations',
      'clima.frostAlert': 'Frost Alert',
      'clima.frostRec': 'Risk of frost at night. Protect sensitive crops.',
      'clima.seedRec': 'Sowing Recommendation',
      'clima.seedRecDesc': 'Ideal conditions for corn sowing.',
      'clima.rainForecast': 'Rain Forecast',
      'clima.rainForecastDesc': 'Moderate rain expected. Adjust irrigation as needed.',
      
      // Guias page
      'guias.title': 'Practical Guides',
      'guias.subtitle': 'Explore our library of practical guides to optimize your crops and improve your agricultural practices.',
      'guias.filterPests': 'Pest Management',
      'guias.filterClimate': 'Climate Control',
      'guias.filterIrrigation': 'Irrigation and Nutrients',
      'guias.filterHarvest': 'Harvest and Post-harvest',
      'guias.filterMaintenance': 'Preventive Maintenance',
      'guias.recommended': 'Recommended Guides',
      'guias.maizGuide': 'Guide for pest control in corn crops',
      'guias.maizDesc': 'Learn to identify and control the most common pests in corn crops.',
      'guias.tomatoGuide': 'Efficient irrigation management in tomato crops',
      'guias.tomatoDesc': 'Optimize water use and improve the quality of your tomatoes with our recommendations.',
      'guias.fruitsGuide': 'Harvest and post-harvest techniques for fruits',
      'guias.fruitsDesc': 'Discover best practices to ensure quality and durability of your products.',
      'guias.allGuides': 'All Guides',
      
      // Foro page
      'foro.title': 'Discussion Forum',
      'foro.subtitle': 'Discuss best agricultural practices, solve problems and share knowledge with the community.',
      'foro.tabCropProblems': 'Crop Problems',
      'foro.tabTechnology': 'Technology and Tools',
      'foro.tabClimate': 'Climate Conditions',
      'foro.tabImprovements': 'Agricultural Improvements',
      'foro.tabNews': 'News and Updates',
      'foro.topic1Title': 'Pest Management in Corn Crops',
      'foro.topic1Desc': "Let's discuss best practices for pest management in corn crops. What methods have been effective for you?",
      'foro.by': 'By',
      'foro.daysAgo': 'days ago',
      'foro.topic2Title': 'Comparison of Tractors and Agricultural Tools',
      'foro.topic2Desc': 'Share your experiences with different types of tractors and agricultural tools. Which brands and models are most reliable?',
      
      // Noticias page
      'noticias.title': 'Latest News',
      'noticias.subtitle': 'Stay updated on the agricultural sector, technology and climate.',
      'noticias.tabClimate': 'Climate',
      'noticias.tabCrops': 'Crops',
      'noticias.tabTechnology': 'Agricultural Technology',
      'noticias.tabForum': 'Forum News',
      'noticias.news1Title': 'Impact of Climate Change on Local Agriculture',
      'noticias.news1Excerpt': 'A recent study reveals how climate variations are affecting crops in the region...',
      'noticias.readMore': 'Read More',
      'noticias.news2Title': 'New Sustainable Farming Techniques',
      'noticias.news2Excerpt': 'Discover the latest innovations in sustainable agriculture that are helping farmers improve their yields.',
      'noticias.loadMore': 'Load more news',
      'noticias.relatedNews': 'Related News',
      'noticias.recentComments': 'Recent Comments',
      
      // Plagas page
      'plagas.title': 'Pest Identification',
      'plagas.subtitle': 'Use our artificial vision system to identify pests in your crops or explore our database.',
      'plagas.quickId': 'Quick Identification by Image',
      'plagas.dragDrop': 'Drag and drop a photo of the damage or pest, or click to browse.',
      'plagas.uploadBtn': 'Upload Image',
      'plagas.resultTitle': 'Identification Result',
      'plagas.resultExample': 'The detected pest would be shown here (e.g: Aphid) with confidence percentage and recommendations.',
      'plagas.searchDb': 'Search in Database',
      'plagas.searchBtn': 'Search',
      'plagas.commonPests': 'Common Pests in the Region',
      
      // Profile page
      'profile.title': 'My Profile and Settings',
      'profile.subtitle': 'Manage your account information, notifications and SmartCrop application settings.',
      'profile.changePicture': 'Change Photo',
      'profile.personalInfo': 'Personal Information',
      'profile.fullName': 'Full Name',
      'profile.email': 'Email',
      'profile.cropLocation': 'Crop Location',
      'profile.saveChanges': 'Save Changes',
      'profile.notifications': 'Notifications',
      'profile.pestAlerts': 'Pest Alerts',
      'profile.irrigationReminders': 'Irrigation Reminders',
      'profile.newsGuides': 'News and Guides',
      'profile.changePassword': 'Change Password',
      'profile.logout': 'Logout',
      
      // Red de Agricultores page
      'red.title': 'Farmers Network',
      'red.subtitle': 'Connect with other farmers to share experiences, tips and solutions.',
      'red.newPost': 'Create a new post',
      'red.postBtn': 'Post',
      'red.recentPosts': 'Recent Posts',
      'red.inIrrigation': 'In Irrigation',
      'red.postTitle': 'Best way to apply drip irrigation in dry climate',
      'red.postContent': 'Hello everyone, I\'m experiencing excessive evaporation with my drip system...',
      'red.likes': 'Likes',
      'red.comments': 'Comments',
      'red.popularTopics': 'Popular Topics',
      'red.suggestedFarmers': 'Suggested Farmers',
      
      // Real-time page
      'realtime.title': 'Plant Monitoring',
      'realtime.subtitle': 'View real-time images or recordings of your crops through IoT cameras.',
      'realtime.snapshot': 'Snapshot',
      'realtime.imageHistory': 'Image History',
      'realtime.metadata': 'Image Metadata',
      'realtime.waterStress': 'Possible Water Stress',
      'realtime.stressDesc': 'Detected in the upper right quadrant.',
      'realtime.healthyGrowth': 'Healthy Growth',
      'realtime.healthyDesc': 'Normal cell growth in 80% of the crop.',
      'realtime.cameraControls': 'Camera Controls',
      'realtime.zoom': 'Zoom',
      'realtime.contrast': 'Contrast',
      'realtime.pause': 'Pause/Capture',
      'realtime.brightness': 'Brightness',
      'realtime.selectCamera': 'Select camera',
      'realtime.zoneA': 'Zone A',
      'realtime.zoneB': 'Zone B',
      'realtime.zoneC': 'Zone C',
      
      // Temporal Registro page
      'temporal.title': 'Temporal Record',
      'temporal.subtitle': 'Access data history, statistics and events related to your crops, pests and temperature.',
      'temporal.thisWeek': 'This Week',
      'temporal.thisMonth': 'This Month',
      'temporal.custom': 'Custom',
      'temporal.avgTemp': 'Average Temperature',
      'temporal.pestsDetected': 'Pests Detected',
      'temporal.extremeConditions': 'Extreme Weather Conditions',
      'temporal.alertsActions': 'Alerts/Actions',
      'temporal.charts': 'Interactive Charts',
      'temporal.temperature': 'Temperature',
      'temporal.pests': 'Pests',
      'temporal.events': 'Events/Actions',
      'temporal.timeline': 'Timeline'
    },
    'es-ES': {
      // Login page
      'login.title': 'Iniciar Sesión',
      'login.username': 'Usuario',
      'login.usernameP': 'Ingresa tu usuario',
      'login.password': 'Contraseña',
      'login.passwordP': 'Ingresa tu contraseña',
      'login.remember': 'Recuérdame',
      'login.forgot': '¿Olvidaste tu contraseña?',
      'login.button': 'Ingresar',
      'login.noAccount': '¿No tienes una cuenta?',
      'login.register': 'Crear una cuenta',
      
      // Register page
      'register.title': 'Crear Cuenta',
      'register.username': 'Usuario',
      'register.email': 'Correo Electrónico',
      'register.password': 'Contraseña',
      'register.confirmPassword': 'Confirmar Contraseña',
      'register.button': 'Registrarse',
      'register.haveAccount': '¿Ya tienes una cuenta?',
      'register.login': 'Ingresar',
      
      // Dashboard
      'dashboard.title': 'Panel de Control del Agricultor',
      'dashboard.realTimeView': 'Vista en Tiempo Real',
      'dashboard.currentTemp': 'Temperatura Actual',
      'dashboard.humidity': 'Humedad',
      'dashboard.wind': 'Viento',
      'dashboard.forecast': 'Pronóstico',
      'dashboard.viewHistory': 'Ver Historial',
      
      // Header navigation
      'header.dashboard': 'Panel de Control',
      'header.forum': 'Foro',
      'header.weather': 'Clima',
      'header.news': 'Noticias',
      
      // Sidebar
      'sidebar.temperature': 'Temperatura',
      'sidebar.realTime': 'Ver plantas en tiempo real',
      'sidebar.temporal': 'Ver registro temporal',
      'sidebar.plagas': 'Identificación de Plagas',
      'sidebar.alertas': 'Alertas y notificaciones',
      'sidebar.redAgricultores': 'Red de agricultores',
      'sidebar.guias': 'Guías prácticas y recomendaciones',
      'sidebar.perfil': 'Perfil',
      'sidebar.foro': 'Foro',
      'sidebar.clima': 'Clima',
      'sidebar.noticias': 'Noticias',
      
      // Alertas page
      'alertas.title': 'Alertas y Notificaciones',
      'alertas.subtitle': 'Monitorea eventos críticos y recomendaciones para tus cultivos.',
      'alertas.tabClimate': 'Clima',
      'alertas.tabPests': 'Plagas',
      'alertas.tabHumidity': 'Humedad',
      'alertas.tabActions': 'Acciones',
      'alertas.tabGeneral': 'General',
      'alertas.lowHumidity': 'Baja Humedad',
      'alertas.lowHumidityDesc': 'Se detectó baja humedad en el sector B. Se recomienda riego inmediato.',
      'alertas.urgent': 'Urgente',
      'alertas.alertHistory': 'Historial de Alertas',
      'alertas.highTemp': 'Temperatura Alta',
      'alertas.highTempDesc': 'La temperatura en el sector B superó 35°C. Se recomienda activar el sistema de riego por aspersión.',
      'alertas.whitefly': 'Mosca Blanca',
      'alertas.whiteflyDesc': 'Se detectó un aumento en la población de mosca blanca en el cultivo de pimiento. Se recomienda tratamiento preventivo.',
      'alertas.realTimeAlert': 'Alerta en Tiempo Real',
      'alertas.frostAlert': 'Alerta de Helada',
      'alertas.frostAlertDesc': 'Se espera una helada severa en las próximas 3 horas. Protege tus cultivos.',
      'alertas.viewDetails': 'Ver Detalles →',
      'alertas.config': 'Configuración',
      'alertas.customizeNotif': 'Personalizar Notificaciones',
      'alertas.viewFullHistory': 'Ver Historial Completo',
      
      // Clima page
      'clima.title': 'Clima y Pronóstico',
      'clima.subtitle': 'Información meteorológica actualizada para optimizar tu planificación de cultivos.',
      'clima.sunny': 'Soleado',
      'clima.humidity': 'Humedad',
      'clima.weeklyForecast': 'Pronóstico Semanal',
      'clima.monday': 'Lunes',
      'clima.wednesday': 'Miércoles',
      'clima.alertsRec': 'Alertas y Recomendaciones',
      'clima.frostAlert': 'Alerta de Helada',
      'clima.frostRec': 'Riesgo de helada en la noche. Protege los cultivos sensibles.',
      'clima.seedRec': 'Recomendación de Siembra',
      'clima.seedRecDesc': 'Condiciones ideales para la siembra de maíz.',
      'clima.rainForecast': 'Pronóstico de Lluvia',
      'clima.rainForecastDesc': 'Se espera lluvia moderada. Ajusta el riego según sea necesario.',
      
      // Guias page
      'guias.title': 'Guías Prácticas',
      'guias.subtitle': 'Explora nuestra biblioteca de guías prácticas para optimizar tus cultivos y mejorar tus prácticas agrícolas.',
      'guias.filterPests': 'Gestión de Plagas',
      'guias.filterClimate': 'Control del Clima',
      'guias.filterIrrigation': 'Riego y Nutrientes',
      'guias.filterHarvest': 'Cosecha y Postcosecha',
      'guias.filterMaintenance': 'Mantenimiento Preventivo',
      'guias.recommended': 'Guías Recomendadas',
      'guias.maizGuide': 'Guía de control de plagas en cultivos de maíz',
      'guias.maizDesc': 'Aprende a identificar y controlar las plagas más comunes en cultivos de maíz.',
      'guias.tomatoGuide': 'Gestión eficiente del riego en cultivos de tomate',
      'guias.tomatoDesc': 'Optimiza el uso del agua y mejora la calidad de tus tomates con nuestras recomendaciones.',
      'guias.fruitsGuide': 'Técnicas de cosecha y postcosecha para frutas',
      'guias.fruitsDesc': 'Descubre las mejores prácticas para garantizar calidad y durabilidad de tus productos.',
      'guias.allGuides': 'Todas las Guías',
      
      // Foro page
      'foro.title': 'Foro de Discusión',
      'foro.subtitle': 'Discute mejores prácticas agrícolas, resuelve problemas y comparte conocimientos con la comunidad.',
      'foro.tabCropProblems': 'Problemas de Cultivos',
      'foro.tabTechnology': 'Tecnología y Herramientas',
      'foro.tabClimate': 'Condiciones Climáticas',
      'foro.tabImprovements': 'Mejoras Agrícolas',
      'foro.tabNews': 'Noticias y Actualizaciones',
      'foro.topic1Title': 'Gestión de Plagas en Cultivos de Maíz',
      'foro.topic1Desc': '¿Discutamos las mejores prácticas para la gestión de plagas en cultivos de maíz? ¿Qué métodos han sido efectivos para ti?',
      'foro.by': 'Por',
      'foro.daysAgo': 'hace',
      'foro.topic2Title': 'Comparación de Tractores y Herramientas Agrícolas',
      'foro.topic2Desc': 'Comparte tus experiencias con diferentes tipos de tractores y herramientas agrícolas. ¿Qué marcas y modelos son más confiables?',
      
      // Noticias page
      'noticias.title': 'Últimas Noticias',
      'noticias.subtitle': 'Mantente actualizado sobre el sector agrícola, tecnología y clima.',
      'noticias.tabClimate': 'Clima',
      'noticias.tabCrops': 'Cultivos',
      'noticias.tabTechnology': 'Tecnología Agrícola',
      'noticias.tabForum': 'Noticias del Foro',
      'noticias.news1Title': 'Impacto del Cambio Climático en la Agricultura Local',
      'noticias.news1Excerpt': 'Un estudio reciente revela cómo las variaciones climáticas están afectando los cultivos en la región...',
      'noticias.readMore': 'Leer Más',
      'noticias.news2Title': 'Nuevas Técnicas de Agricultura Sostenible',
      'noticias.news2Excerpt': 'Descubre las últimas innovaciones en agricultura sostenible que están ayudando a los agricultores a mejorar sus rendimientos.',
      'noticias.loadMore': 'Cargar más noticias',
      'noticias.relatedNews': 'Noticias Relacionadas',
      'noticias.recentComments': 'Comentarios Recientes',
      
      // Plagas page
      'plagas.title': 'Identificación de Plagas',
      'plagas.subtitle': 'Utiliza nuestro sistema de visión artificial para identificar plagas en tus cultivos o explora nuestra base de datos.',
      'plagas.quickId': 'Identificación Rápida por Imagen',
      'plagas.dragDrop': 'Arrastra y suelta una foto del daño o plaga, o haz clic para explorar.',
      'plagas.uploadBtn': 'Subir Imagen',
      'plagas.resultTitle': 'Resultado de Identificación',
      'plagas.resultExample': 'La plaga detectada se mostraría aquí (ej: Áfido) con porcentaje de confianza y recomendaciones.',
      'plagas.searchDb': 'Buscar en Base de Datos',
      'plagas.searchBtn': 'Buscar',
      'plagas.commonPests': 'Plagas Comunes en la Región',
      
      // Profile page
      'profile.title': 'Mi Perfil y Configuración',
      'profile.subtitle': 'Gestiona la información de tu cuenta, notificaciones y configuración de la aplicación SmartCrop.',
      'profile.changePicture': 'Cambiar Foto',
      'profile.personalInfo': 'Información Personal',
      'profile.fullName': 'Nombre Completo',
      'profile.email': 'Correo Electrónico',
      'profile.cropLocation': 'Ubicación del Cultivo',
      'profile.saveChanges': 'Guardar Cambios',
      'profile.notifications': 'Notificaciones',
      'profile.pestAlerts': 'Alertas de Plagas',
      'profile.irrigationReminders': 'Recordatorios de Riego',
      'profile.newsGuides': 'Noticias y Guías',
      'profile.changePassword': 'Cambiar Contraseña',
      'profile.logout': 'Cerrar Sesión',
      
      // Red de Agricultores page
      'red.title': 'Red de Agricultores',
      'red.subtitle': 'Conecta con otros agricultores para compartir experiencias, consejos y soluciones.',
      'red.newPost': 'Crear una nueva publicación',
      'red.postBtn': 'Publicar',
      'red.recentPosts': 'Publicaciones Recientes',
      'red.inIrrigation': 'En Riego',
      'red.postTitle': 'La mejor forma de aplicar riego por goteo en clima seco',
      'red.postContent': 'Hola a todos, estoy experimentando una evaporación excesiva con mi sistema de goteo...',
      'red.likes': 'Me gusta',
      'red.comments': 'Comentarios',
      'red.popularTopics': 'Temas Populares',
      'red.suggestedFarmers': 'Agricultores Sugeridos',
      
      // Real-time page
      'realtime.title': 'Monitoreo de Plantas',
      'realtime.subtitle': 'Ver imágenes o grabaciones en tiempo real de tus cultivos a través de cámaras IoT.',
      'realtime.snapshot': 'Instantánea',
      'realtime.imageHistory': 'Historial de Imágenes',
      'realtime.metadata': 'Metadatos de Imagen',
      'realtime.waterStress': 'Posible Estrés Hídrico',
      'realtime.stressDesc': 'Detectado en el cuadrante superior derecho.',
      'realtime.healthyGrowth': 'Crecimiento Saludable',
      'realtime.healthyDesc': 'Crecimiento celular normal en el 80% del cultivo.',
      'realtime.cameraControls': 'Controles de Cámara',
      'realtime.zoom': 'Zoom',
      'realtime.contrast': 'Contraste',
      'realtime.pause': 'Pausa/Captura',
      'realtime.brightness': 'Brillo',
      'realtime.selectCamera': 'Seleccionar cámara',
      'realtime.zoneA': 'Zona A',
      'realtime.zoneB': 'Zona B',
      'realtime.zoneC': 'Zona C',
      
      // Temporal Registro page
      'temporal.title': 'Registro Temporal',
      'temporal.subtitle': 'Accede al historial de datos, estadísticas y eventos relacionados con tus cultivos, plagas y temperatura.',
      'temporal.thisWeek': 'Esta Semana',
      'temporal.thisMonth': 'Este Mes',
      'temporal.custom': 'Personalizado',
      'temporal.avgTemp': 'Temperatura Promedio',
      'temporal.pestsDetected': 'Plagas Detectadas',
      'temporal.extremeConditions': 'Condiciones Climáticas Extremas',
      'temporal.alertsActions': 'Alertas/Acciones',
      'temporal.charts': 'Gráficos Interactivos',
      'temporal.temperature': 'Temperatura',
      'temporal.pests': 'Plagas',
      'temporal.events': 'Eventos/Acciones',
      'temporal.timeline': 'Línea de Tiempo'
    }
  };

  constructor() {
    // Cargar idioma guardado del localStorage
    const savedLanguage = this.getSavedLanguage();
    if (savedLanguage) {
      this.currentLanguage.set(savedLanguage);
    }
  }

  private getInitialLanguage(): Language {
    const saved = this.getSavedLanguage();
    if (saved) return saved;
    
    // SIEMPRE retorna Inglés como idioma inicial por defecto
    return 'en-US';
  }

  private getSavedLanguage(): Language | null {
    const saved = localStorage.getItem('app-language');
    if (saved === 'en-US' || saved === 'es-ES') {
      return saved as Language;
    }
    return null;
  }

  setLanguage(language: Language): void {
    // Guardar preferencia
    localStorage.setItem('app-language', language);
    this.currentLanguage.set(language);
  }

  translate(key: string): string {
    const lang = this.currentLanguage();
    return this.translations[lang][key] || key;
  }

  getLanguage(): Language {
    return this.currentLanguage();
  }
}
