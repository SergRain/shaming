/**
 * Russian translation
 * @author Dmitry "dio" Levashov <dio@std42.ru>
 * @version 2011-07-15
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.uk_UA = {
		translator : 'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;',
		language   : 'Українська мова',
		direction  : 'ltr',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Помилка',
			'errUnknown'           : 'Невідома помилка.',
			'errUnknownCmd'        : 'Невідома вказівка.',
			'errJqui'              : 'Відсутні компоненти jQuery UI - selectable, draggable и droppable.',
			'errNode'              : 'Відсутній DOM елемент для ініціювання elFinder.',
			'errURL'               : 'Некорректне налаштування. Необхідно вказати URL сервера.',
			'errAccess'            : 'Доступ заборонено.',
			'errConnect'           : 'Не вдалось з`єднатись с сервером.',
			'errAbort'             : 'З`эднання скинуто.',
			'errTimeout'           : 'Таймаут з`єднання.',
			'errNotFound'          : 'Сервер не знайдено.',
			'errResponse'          : 'Некорректный ответ сервера.',
			'errConf'              : 'Некорректная настройка сервера.',
			'errJSON'              : 'Модуль PHP JSON не установлен.',
			'errNoVolumes'         : 'Отсутствуют корневые директории достуные для чтения.',
			'errCmdParams'         : 'Некорректные параметры комманды "$1".',
			'errDataNotJSON'       : 'Данные не формате JSON.',
			'errDataEmpty'         : 'Данные отсутствуют.',
			'errCmdReq'            : 'Для запроса к серверу необходимо указать имя комманды.',
			'errOpen'              : 'Не удалось открыть "$1".',
			'errNotFolder'         : 'Объект не является папкой.',
			'errNotFile'           : 'Объект не является файлом.',
			'errRead'              : 'Ошибка чтения "$1".',
			'errWrite'             : 'Ошибка записи "$1".',
			'errPerm'              : 'Доступ запрещен.',
			'errLocked'            : '"$1" защищен и не может быть переименован, перемещен или удален.',
			'errExists'            : 'В папке уже существует объект с именем "$1".',
			'errInvName'           : 'Недопустимое имя файла.',
			'errFolderNotFound'    : 'Папка не найдена.',
			'errFileNotFound'      : 'Файл не найден.',
			'errTrgFolderNotFound' : 'Целевая папка "$1" не найдена.',
			'errPopup'             : 'Браузер заблокировал открытие нового окна. Чтобы окрыть файл, измените настройки браузера.',
			'errMkdir'             : 'Ошибка создания папки "$1".',
			'errMkfile'            : 'Ошибка создания файла "$1".',
			'errRename'            : 'Ошибка переименования "$1".',
			'errCopyFrom'          : 'Копирование из корневой директории "$1" запрещено.',
			'errCopyTo'            : 'Копирование в корневую директорию "$1" запрещено.',
			'errUploadCommon'      : 'Ошибка загрузки файлов.',
			'errUpload'            : 'Ошибка загрузки "$1".',
			'errUploadNoFiles'     : 'Отсутствуют загруженые файлы.',
			'errMaxSize'           : 'Превышен допустимый размер загружаемых файлов.',
			'errFileMaxSize'       : 'Размер файла превышает допустимый.',
			'errUploadMime'        : 'Недопустимый тип файла.',
			'errUploadTransfer'    : 'Ошибка передачи файла "$1".', 
			'errSave'              : 'Ошибка сохранения "$1".',
			'errCopy'              : 'Ошибка копирования "$1".',
			'errMove'              : 'Ошибка перемещения "$1".',
			'errCopyInItself'      : 'Невозможно скопировать "$1" в самого себя.',
			'errRm'                : 'Ошибка удаления "$1".',
			'errExtract'           : 'Ошибка извлечения файлов из архива "$1".',
			'errArchive'           : 'Ошибка создания архива.',
			'errArcType'           : 'Неподдерживаемый тип архива.',
			'errNoArchive'         : 'Файл не является архивом допустимого типа.',
			'errCmdNoSupport'      : 'Сервер не поддерживает эту комманду.',
			'errReplByChild'       : 'Невозможно заменить папку "$1" содержащимся в ней объектом.',
			'errArcSymlinks'       : 'По соображениям безопасности запрещена распаковка архивов, содержащих ссылки (symlinks).',
			'errArcMaxSize'        : 'Размер файлов в архиве превышает максимально разрешенный.',
			'errResize'            : 'Не удалось изменить размер "$1".',
			'errUsupportType'      : 'Неподдерживаемый тип файла.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Створити архів',
			'cmdback'      : 'Назад',
			'cmdcopy'      : 'Копіювати',
			'cmdcut'       : 'Вирізати',
			'cmddownload'  : 'Завантажити',
			'cmdduplicate' : 'Зробити копію',
			'cmdedit'      : 'Редагувати',
			'cmdextract'   : 'Розархівувати',
			'cmdforward'   : 'Вперед',
			'cmdgetfile'   : 'Обрати',
			'cmdhelp'      : 'Про програму',
			'cmdhome'      : 'Додому',
			'cmdinfo'      : 'Властивості',
			'cmdmkdir'     : 'Нова тека',
			'cmdmkfile'    : 'Новий файл',
			'cmdopen'      : 'Відкрити',
			'cmdpaste'     : 'Вставити',
			'cmdquicklook' : 'Швидкий перегляд',
			'cmdreload'    : 'Оновити',
			'cmdrename'    : 'Переіменувати',
			'cmdrm'        : 'Видалити',
			'cmdsearch'    : 'Пошук',
			'cmdup'        : 'Вгору',
			'cmdupload'    : 'Завантажити файли',
			'cmdview'      : 'Вид',
			'cmdresize'    : 'Розмір зображення',
			'cmdsort'      : 'Сортувати',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Закрити',
			'btnSave'   : 'Зберегти',
			'btnRm'     : 'Видалити',
			'btnCancel' : 'Скасувати',
			'btnApply'  : 'Застосувати',
			'btnNo'     : 'Ні',
			'btnYes'    : 'Так',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Відкриваю теку',
			'ntffile'     : 'Відкривання файла',
			'ntfreload'   : 'Оновлення теки',
			'ntfmkdir'    : 'Створення теки',
			'ntfmkfile'   : 'Створення файлу',
			'ntfrm'       : 'Видалення файлів',
			'ntfcopy'     : 'Копіюовання файлів',
			'ntfmove'     : 'Переміщення файлів',
			'ntfprepare'  : 'Подготовка до копіювання',
			'ntfrename'   : 'Переіменуваня файлів',
			'ntfupload'   : 'Завантажити файлов',
			'ntfdownload' : 'Скачування файлів',
			'ntfsave'     : 'Збереження файлів',
			'ntfarchive'  : 'Створення архіву',
			'ntfextract'  : 'Разпакування архіву',
			'ntfsearch'   : 'Пошук файлів',
			'ntfsmth'     : 'Занят важным делом desu >_<',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'Невідомо',
			'Today'       : 'Сьогодні',
			'Yesterday'   : 'Вчора',
			'Jan'         : 'Січ',
			'Feb'         : 'Лют',
			'Mar'         : 'Бер',
			'Apr'         : 'Кві',
			'May'         : 'Тра',
			'Jun'         : 'Чер',
			'Jul'         : 'Лип',
			'Aug'         : 'Сер',
			'Sep'         : 'Вер',
			'Oct'         : 'Жов',
			'Nov'         : 'Лист',
			'Dec'         : 'Гру',

			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'по імені (теки з початку)', 
			'sortkindDirsFirst' : 'по типу (теки з початку)', 
			'sortsizeDirsFirst' : 'по розміру (теки з початку)', 
			'sortdateDirsFirst' : 'по даті (теки з початку)', 
			'sortname'          : 'по імені', 
			'sortkind'          : 'по типу', 
			'sortsize'          : 'по розміру',
			'sortdate'          : 'по даті',

			/********************************** messages **********************************/
			'confirmReq'      : 'Необхідне підтверждення.',
			'confirmRm'       : 'Бажаєте видалити файли?<br>Дію не повернути.',
			'confirmRepl'     : 'Замінити старий файл новим?',
			'apllyAll'        : 'для усіх',
			'name'            : 'Ім`я файлу',
			'size'            : 'Розмір',
			'perms'           : 'Доступ',
			'modify'          : 'Змінено',
			'kind'            : 'Тип',
			'read'            : 'читання',
			'write'           : 'запис',
			'noaccess'        : 'немеє доступа',
			'and'             : 'та',
			'unknown'         : 'невідомо',
			'selectall'       : 'Обрати усі файли',
			'selectfiles'     : 'Обрати файл(и)',
			'selectffile'     : 'Обрати перший файл',
			'selectlfile'     : 'Обрати останній файл',
			'viewlist'        : 'Як список',
			'viewicons'       : 'Як іконки',
			'places'          : 'Обране',
			'calc'            : 'підраховую', 
			'path'            : 'Шлях',
			'aliasfor'        : 'Вказує на',
			'locked'          : 'Захист',
			'dim'             : 'Розмір',
			'files'           : 'Файли',
			'folders'         : 'Теки',
			'items'           : 'Об`єкти',
			'yes'             : 'так',
			'no'              : 'ні',
			'link'            : 'Посилання',
			'searcresult'     : 'Результати пошуку',  
			'selected'        : 'обрано',
			'about'           : 'Про програму',
			'shortcuts'       : 'Гарячі клавіші',
			'help'            : 'Допомога',
			'webfm'           : 'Файловий менеджер для web',
			'ver'             : 'Версія',
			'protocol'        : 'версія протоколу',
			'homepage'        : 'Сайт проекту',
			'docs'            : 'Документація',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us in twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Автори',
			'chiefdev'        : 'ведучий розробник',
			'developer'       : 'розробник',
			'contributor'     : 'учасник',
			'maintainer'      : 'супроводження проекту',
			'translator'      : 'перекладач',
			'icons'           : 'Іконки',
			'dontforget'      : 'и не забудьте взять своё полотенце',
			'shortcutsof'     : 'Гарячі клавіші відключено',
			'dropFiles'       : 'Кинути файли',
			'or'              : 'або',
			'selectForUpload' : 'Обрати файли для завантаження',
			'moveFiles'       : 'Переміщення файлів',
			'copyFiles'       : 'Копіювання файлів',
			'rmFromPlaces'    : 'Видалити з обраного',
			'untitled folder' : 'нова тека',
			'untitled file.txt' : 'новий файл.txt',
			'aspectRatio'     : 'Зберігати пропорції',
			'scale'           : 'Масштаб',
			'width'           : 'Ширина',
			'height'          : 'Висота',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Невідомий',
			'kindFolder'      : 'Тека',
			'kindAlias'       : 'Посилання',
			'kindAliasBroken' : 'Поламане посилання',
			// applications
			'kindApp'         : 'Додаток',
			'kindPostscript'  : 'Документ Postscript',
			'kindMsOffice'    : 'Документ Microsoft Office',
			'kindMsWord'      : 'Документ Microsoft Word',
			'kindMsExcel'     : 'Документ Microsoft Excel',
			'kindMsPP'        : 'Презентація Microsoft Powerpoint',
			'kindOO'          : 'Документ Open Office',
			'kindAppFlash'    : 'Додаток Flash',
			'kindPDF'         : 'Документ PDF',
			'kindTorrent'     : 'Файл Bittorrent',
			'kind7z'          : 'Архів 7z',
			'kindTAR'         : 'Архів TAR',
			'kindGZIP'        : 'Архів GZIP',
			'kindBZIP'        : 'Архів BZIP',
			'kindZIP'         : 'Архів ZIP',
			'kindRAR'         : 'Архів RAR',
			'kindJAR'         : 'Файл Java JAR',
			'kindTTF'         : 'Шрифт True Type',
			'kindOTF'         : 'Шрифт Open Type',
			'kindRPM'         : 'Пакет RPM',
			// texts
			'kindText'        : 'Текстовий документ',
			'kindTextPlain'   : 'Звичайний текст',
			'kindPHP'         : 'PHP',
			'kindCSS'         : 'Таблиця стилю CSS',
			'kindHTML'        : 'Документ HTML',
			'kindJS'          : 'Javascript',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C',
			'kindCHeader'     : 'Заголовочный файл C',
			'kindCPP'         : 'C++',
			'kindCPPHeader'   : 'Заголовочный файл C++',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python',
			'kindJava'        : 'Java',
			'kindRuby'        : 'Ruby',
			'kindPerl'        : 'Perl',
			'kindSQL'         : 'SQL',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'AWK',
			'kindCSV'         : 'Текст з розподілювачами',
			'kindDOCBOOK'     : 'Документ Docbook XML',
			// images
			'kindImage'       : 'Зображення',
			'kindBMP'         : 'Зображення BMP',
			'kindJPEG'        : 'Зображення JPEG',
			'kindGIF'         : 'Зображення GIF',
			'kindPNG'         : 'Зображення PNG',
			'kindTIFF'        : 'Зображення TIFF',
			'kindTGA'         : 'Зображення TGA',
			'kindPSD'         : 'Зображення Adobe Photoshop',
			'kindXBITMAP'     : 'Зображення X bitmap',
			'kindPXM'         : 'Зображення Pixelmator',
			// media
			'kindAudio'       : 'Аудіо файл',
			'kindAudioMPEG'   : 'Аудіо MPEG',
			'kindAudioMPEG4'  : 'Аудіо MPEG-4',
			'kindAudioMIDI'   : 'Аудіо MIDI',
			'kindAudioOGG'    : 'Аудіо Ogg Vorbis',
			'kindAudioWAV'    : 'Аудіо WAV',
			'AudioPlaylist'   : 'Плейлист MP3',
			'kindVideo'       : 'Відео файл',
			'kindVideoDV'     : 'Відео DV',
			'kindVideoMPEG'   : 'Відео MPEG',
			'kindVideoMPEG4'  : 'Відео MPEG-4',
			'kindVideoAVI'    : 'Відео AVI',
			'kindVideoMOV'    : 'Відео Quick Time',
			'kindVideoWM'     : 'Відео Windows Media',
			'kindVideoFlash'  : 'Відео Flash',
			'kindVideoMKV'    : 'Відео Matroska',
			'kindVideoOGG'    : 'Відео Ogg'
			
		}
	}
}


 
