import winston, { format } from 'winston';
const { simple, colorize } = format;

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(simple(), colorize()),
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/info.log' }),
    ],
});
export class LoggerStream {
    write(message: string): void {
        const error = parseInt(message.split(' ').slice(-5, 6)[0], 10);
        switch (true) {
            case error <= 201:
                logger.info(message.slice(0, -1));
                break;
            case error >= 400:
                logger.error(message.slice(0, -1));
                break;
        }
    }
}

if (process.env.NODE_ENV === 'dev') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}
