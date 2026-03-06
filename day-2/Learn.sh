TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
-H "Content-Type: application/json" \
-X POST \
"https://projsadp.jamfcloud.com/api/v1/auth/token" | jq -r '.token')

curl -X PUT \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/xml" \
"https://projsadp.jamfcloud.com/JSSResource/computers/id/11" \
-d '<computer>
<extension_attributes>
<extension_attribute>
<id>1</id>
<value>Pro2</value>
</extension_attribute>
</extension_attributes>
</computer>'