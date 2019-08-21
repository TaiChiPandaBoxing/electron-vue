/**
 * @api {WebSocket} / 实时接收状态值
 * @apiName getStatus
 * @apiGroup WebRTC
 * @apiVersion 0.0.0
 * @apiDescription 实时接收状态值
 * @apiSuccessExample Success-Response:
 *     {
 *       "type": "RTC",
 *       "status": "200",
 *       "action": "updateRes",
 *       "message": "success",
 *       "data": "45",
 *     }
* @apiErrorExample Error-Response:
 *     {
 *       "type": "RTC",
 *       "status": "400",
 *       "action": "updateRes",
 *       "message": "updateRes fail",
 *     }
 */