/**
 * 
 */
package com.webtactoe.sockets;

import java.io.IOException;
import java.util.HashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

/**
	author: Vicky pl
	email: vicky542011@gmail.com
	mobile: 7828789845
 **/
/**
 * @author Anonymox
 *
 */
@ServerEndpoint(value="/connect/{username}")
public class InitializationSocket {

	static HashMap<String, Session> sessions = new HashMap<String, Session>();
	
	@OnOpen
	public void onOpen(Session session, @PathParam("username") String username) {
		
		sessions.put(username, session);
		String msg = "Online";
		System.out.println(session.getId()+" is Connected.");
		try {
			session.getBasicRemote().sendText(msg);
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	@OnMessage
	public void onMessage(String msg, Session session) {
		String[] msgToFrom = msg.split("~");
		String msgFrom = msgToFrom[1].trim();
		String msgTo = msgToFrom[0].trim();
		
		Session ts = sessions.get(msgTo);
		if(msgFrom.equals("ACPTD")) {
			try {
				ts.getBasicRemote().sendText("ACPTD"); //acptd = accepted in case the user accept the request
			} catch(IOException e) {
				e.printStackTrace();
			}
		} else if(ts!=null && !msgFrom.equals("ACPTD")) {
			msg = "<h3 style='font-family: cursive; color: red;' id='rname'>"+msgFrom+"</h3><h3 style='font-family: cursive; color: green;'> Requested to Play.</h3>";
			try {
				ts.getBasicRemote().sendText(msg);
			} catch(IOException e) {
				e.printStackTrace();
			}
		} else if(!msgFrom.equals("ACPTD")) {
			sessions.remove(msg);
			try {
				session.getBasicRemote().sendText("User Just Went Offline...Try Later");
			} catch(IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	@OnError
	public void onError(Session session, Throwable error) {
		System.out.println("Error in WebSocket:-> "+error);
	}
	
	@OnClose
	public void onClose(Session session) {
		try {
				sessions.remove(session);
				session.close();
		} catch (IOException | IllegalStateException e) {
			e.printStackTrace();
		}
		System.out.println(session.getId()+" is Dissconnected..");
	}
	
	public static HashMap<String, Session> getActiveSessions() {
		return sessions;
	}
}
