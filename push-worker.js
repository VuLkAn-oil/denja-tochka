// Gravitec web-push service worker — ДЕНЬЖА.ТОЧКА
// Подключено 02.11.2026: кабинет push.gravitec.net, ключ 0b35fad6fbd9517886fb0c750ba629f8.
// Конфиг приложения Gravitec (https://cdn.gravitec.net/sdk/web/configs?appKey=...)
// требует воркер РОВНО на пути /push-worker.js (swPath) — потому файл называется так.
// Хостед-воркер Gravitec тянет обработчик push с их CDN:
importScripts('https://cdn.gravitec.net/storage/0b35fad6fbd9517886fb0c750ba629f8/push-worker.js');
